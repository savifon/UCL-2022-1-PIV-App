import { defineStore } from "pinia";

const productsStoreUrl =
  "https://raw.githubusercontent.com/savifon/UCL-2022-1-PIV-App/master";

export const useProductsStore = defineStore({
  id: "products",

  state: () => ({
    items: {},
    ids: []
  }),

  getters: {
    list() {
      return this.ids.map((i) => this.items[i]);
    }
  },

  actions: {
    async fetchProducts() {
      const res = await fetch(`${productsStoreUrl}/products.json`);
      const data = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    }
  }
});
