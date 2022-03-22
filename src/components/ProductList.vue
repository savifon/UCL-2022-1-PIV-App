<script setup>
import ProductItem from "@/components/ProductItem.vue";

defineProps({
  products: Array,
});
</script>

<template>
  <ProductItem
    v-for="product in products"
    :key="`product-item-${product.id}`"
    :product="product"
  />
</template>
