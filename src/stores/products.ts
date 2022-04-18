import { defineStore } from "pinia";
import { Product } from "@/types/types";

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
        return this.ids.map((i: number) => this.items[i]);
      } else {
        return this.ids.map((id: number) => {
          if (this.items[id].name.includes(this.filter)) {
            return this.items[id];
          }
        });
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
      this.ids = data.map((product: Product) => {
        this.items[product.id] = product;
        return product.id;
      });
    }
  }
});
