<script lang="ts" setup>
import ProductItem from "@/components/ProductItem.vue";

type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

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
