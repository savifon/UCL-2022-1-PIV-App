import { defineStore } from "pinia";
import { useProductsStore } from "./products";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    products: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : {}
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
    }
  },

  actions: {
    addToCart(id) {
      if (this.products[id]) {
        this.products[id].quantity += 1;
      } else {
        this.products[id] = {
          id,
          quantity: 1
        };
      }

      console.log(this.products);
      localStorage.setItem("cart", JSON.stringify(this.products));
    },

    removeFromCart(id) {
      if (!this.products[id]) {
        return;
      }

      this.products[id].quantity -= 1;

      if (this.products[id].quantity === 0) {
        delete this.products[id];
      }

      localStorage.setItem("cart", JSON.stringify(this.products));
    },

    countItem(id) {
      if (!this.products[id]) {
        return 0;
      }

      return this.products[id].quantity;
    }
  }
});
