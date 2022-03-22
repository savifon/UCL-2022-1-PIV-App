import { defineStore } from "pinia";

const productsStoreUrl = import.meta.env.VITE_GIT_REPO;

export const useProductsStore = defineStore({
  id: "products",

  state: () => ({
    items: {},
    ids: [],
    filter: ""
  }),

  getters: {
    list() {
      if (this.filter.length < 3) {
        return this.ids.map((i) => this.items[i]);
      } else {
        const filtered = [];
        this.ids.map((id) => {
          if (this.items[id].name.includes(this.filter)) {
            filtered.push(this.items[id]);
          }
        });
        return filtered;
      }
    },

    loaded() {
      return this.ids.length > 0;
    }
  },

  actions: {
    async fetchProducts() {
      if (this.loaded) return;

      const res = await fetch(`${productsStoreUrl}/products.json`);
      const data = await res.json();
      this.ids = data.map((product) => {
        this.items[product.id] = product;
        return product.id;
      });
    }
  }
});
