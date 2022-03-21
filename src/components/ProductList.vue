<script setup>
import ProductItem from "./ProductItem.vue";

defineProps({
  products: Array,
});
</script>

<template>
  <ProductItem
    v-for="(product, index) in products"
    :key="`product-item-${index}`"
    :product="product"
  />
</template>
