<script setup>
defineProps({
  products: Array,
});

import ProductItem from "./ProductItem.vue";
</script>

<template>
  <ProductItem
    v-for="(product, index) in products"
    :key="`product-item-${index}`"
    :product="product"
  />
</template>
