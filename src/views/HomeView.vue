<script setup>
import { computed } from "vue";
import ProductList from "../components/ProductList.vue";
import { useProductsStore } from '../stores/products';

const productStore = useProductsStore();
productStore.fetchProducts();
const products = computed(() => productStore.list);
</script>

<template>
  <main class="w-4/5 mx-auto my-8">
    <div class="flex gap-5">
      <ProductList :products="products" />
    </div>
  </main>
</template>
