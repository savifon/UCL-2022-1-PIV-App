import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductsView from "@/views/ProductsView.vue";
import CartView from "@/views/CartView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/produtos",
      name: "produtos",
      component: ProductsView
    },
    {
      path: "/pedido",
      name: "pedido",
      component: CartView
    }
  ]
});

export default router;
