<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import ProductList from "@/components/ProductList.vue";

const cartStore = useCartStore();
const productsInCart = computed(() => cartStore.list);
</script>

<template>
  <div>
    <h1>Cart</h1>

    <div class="product-list">
      <ProductList :products="productsInCart" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  @apply flex gap-5;
}
</style>
