<script setup>
import ProductList from "../components/ProductList.vue";

const products = [
  {
    "id": 1,
    "image": "product-1.jpg",
    "name": "Ração para cães adultos a granel - 100g",
    "price": 123.45
  },
  {
    "id": 2,
    "image": "product-1.jpg",
    "name": "Ração para gatos adultos a granel - 100g",
    "price": 345.67
  },
  {
    "id": 3,
    "image": "product-1.jpg",
    "name": "Ração para cães filhotes a granel - 100g",
    "price": 567.89
  }
]
</script>

<template>
  <main class="w-4/5 mx-auto my-8">
    <div class="flex gap-5">
      <ProductList :products="products" />
    </div>
  </main>
</template>
