<script setup>
import ProductList from "../components/ProductList.vue";
</script>

<template>
  <main class="w-4/5 mx-auto my-8">
    <div class="flex gap-5">
      <ProductList :products="products" />
    </div>
  </main>
</template>
