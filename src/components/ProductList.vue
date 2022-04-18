<script lang="ts" setup>
import ProductItem from "@/components/ProductItem.vue";
import { Product } from "@/types/types";

defineProps<{
  products: Product[];
}>();
</script>

<template>
  <ProductItem
    v-for="product in products"
    :key="`product-item-${product.id}`"
    :product="product"
  />
</template>
