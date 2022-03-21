<script setup>
import { RouterView } from "vue-router";
import HeaderApp from "./components/HeaderApp.vue";
import { useCartStore } from "./stores/cart";

const cartStore = useCartStore();
</script>

<template>
  <HeaderApp :countCart="cartStore.count" />
  <RouterView />
</template>
