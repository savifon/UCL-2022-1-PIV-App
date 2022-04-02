<script setup>
  import { computed } from "vue";
  import { useCartStore } from "@/stores/cart";
  import ProductList from "@/components/ProductList.vue";
  import { getPix } from "@/services/api";

  const cartStore = useCartStore();
  const productsInCart = computed(() => cartStore.list);
</script>

<template>
  <div>
    <h1>Cart (Em desenvolvimento!!!)</h1>

    <button @click="getPix('ração teste', '12.34')">click</button>

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
