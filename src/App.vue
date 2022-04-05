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
    <router-view v-slot="{ Component }">
      <transition name="slide-fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<style lang="scss">
  .main-app {
    @apply w-11/12 mx-auto py-4;
  }

  button {
    &.btn-primary {
      @apply bg-orange-900 text-white;
    }

    &.btn-secondary {
      @apply bg-gray-100;
    }
  }

  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }

  .slide-fade-leave-active {
    // transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);
    transition: none;
  }

  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
</style>
