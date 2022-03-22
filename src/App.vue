<script setup>
import { RouterView } from "vue-router";
import HeaderApp from "@/components/HeaderApp.vue";
import { useProductsStore } from '@/stores/products';
import { useCartStore } from "@/stores/cart";

const productStore = useProductsStore();
productStore.fetchProducts();

const cartStore = useCartStore();
</script>

<template>
  <HeaderApp :countCart="cartStore.count" />

  <main class="main-app">
    <RouterView />
  </main>
</template>

<style>
.main-app {
  @apply w-11/12 mx-auto my-4;
}
</style>
