<script lang="ts" setup>
import { computed } from "vue";
import ProductList from "@/components/ProductList.vue";
import { useProductsStore } from "@/stores/products";

const productStore = useProductsStore();
const products = computed(() => productStore.list);
</script>

<template>
  <div class="product-list">
    <ProductList :products="products" />
  </div>
</template>

<style lang="scss" scoped>
.product-list {
  @apply flex justify-center items-center h-[75vh] gap-10;
}
</style>
