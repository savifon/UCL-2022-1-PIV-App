<script setup>
  import { computed } from "vue";
  import { RouterView } from "vue-router";
  import HeaderApp from "@/components/HeaderApp.vue";
  import { useProductsStore } from "@/stores/products";
  import { useCartStore } from "@/stores/cart";
  import router from "./router";

  const productStore = useProductsStore();
  productStore.fetchProducts();

  const cartStore = useCartStore();

  const currentUrlPath = computed(() => router.currentRoute.value.path);
</script>

<template>
  <HeaderApp v-if="currentUrlPath !== '/'" :countCart="cartStore.count" />

  <main class="main-app">
    <RouterView />
  </main>
</template>

<style lang="scss">
  .main-app {
    @apply w-screen mx-auto p-4;
  }

  button {
    &.btn-primary {
      @apply bg-orange-900 text-white;
    }

    &.btn-secondary {
      @apply bg-gray-100;
    }
  }
</style>
