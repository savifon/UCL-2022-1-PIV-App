import { defineStore } from "pinia";

const productsStoreUrl =
  "https://raw.githubusercontent.com/savifon/UCL-2022-1-PIV-App/master";

export const useProductsStore = defineStore({
  id: "products",

  state: () => ({
    items: {},
    ids: [],
    query: ""
  }),

  getters: {
    list(state) {
      if (state.query.length < 3) {
        return state.ids.map((i) => this.items[i]);
      } else {
        const filtered = [];
        state.ids.map((id) => {
          if (state.items[id].name.includes(this.query)) {
            filtered.push(state.items[id]);
          }
        });
        return filtered;
      }
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
