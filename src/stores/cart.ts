import { ref } from "vue";
import { defineStore } from "pinia";
import { useProductsStore } from "./products";
import { getPix } from "@/services/api";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    products: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {},
    loading: false,
  }),

  getters: {
    priceTotal() {
      const products = useProductsStore();
      return Object.keys(this.products).reduce((acc, id) => {
        return acc + products.items[id].price * this.products[id].quantity;
      }, 0);
    },

    count() {
      return Object.keys(this.products).length;
    },

    list() {
      const stock = useProductsStore();

      if (!stock.loaded) return [];

      return Object.keys(this.products).map((id) => {
        const purchase = this.products[id];

        return {
          id: purchase.id,
          image: stock.items[purchase.id].image,
          name: stock.items[purchase.id].name,
          quantity: purchase.quantity,
          price: purchase.quantity * stock.items[purchase.id].price,
        };
      });
    },
  },

  actions: {
    addToCart(id: number) {
      if (this.products[id]) {
        this.products[id].quantity += 1;
      } else {
        this.products[id] = {
          id,
          quantity: 1,
        };
      }

      localStorage.setItem("cart", JSON.stringify(this.products));
    },

    removeFromCart(id: number) {
      if (!this.products[id]) return;

      this.products[id].quantity -= 1;

      if (this.products[id].quantity === 0) {
        delete this.products[id];
      }

      localStorage.setItem("cart", JSON.stringify(this.products));
    },

    async checkout() {
      if (this.count < 0) return;

      this.loading = true;
      const urlQrCode = ref();

      try {
        urlQrCode.value = await getPix(`Pedido ${new Date()}`, this.priceTotal);
      } catch (error) {
        console.error(error);
        return;
      }

      this.loading = false;
      this.products = {};
      // localStorage.removeItem("cart");
      return urlQrCode.value;
    },

    countItem(id: number) {
      if (!this.products[id]) return 0;

      return this.products[id].quantity;
    },
  },
});
