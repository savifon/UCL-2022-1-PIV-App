import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",

  state: () => ({
    cart: {
      products: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).products : []
    }
  }),

  getters: {
    priceTotal() {
      return this.cart.products.reduce((total, product) => {
        return total + product.price * product.qty;
      }, 0);
    },

    count() {
      return this.cart.products.length;
    }
  },

  actions: {
    addToCart(product) {
      const found = this.cart.products.find((item) => item.id === product.id);

      if (found) {
        found.qty++;
      } else {
        this.cart.products.push({ ...product, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(this.cart));
    },

    removeFromCart(product) {
      const found = this.cart.products.find((item) => item.id === product.id);

      if (found) {
        if (found.qty > 1) {
          found.qty--;
        } else {
          this.cart.products = this.cart.products.filter(
            (item) => item.id !== product.id
          );
        }

        localStorage.setItem("cart", JSON.stringify(this.cart));
      }
    },

    totalQtyItem(product) {
      const found = this.cart.products.find((item) => item.id === product.id);

      if (found) {
        return found.qty;
      }

      return 0;
    }
  }
});
