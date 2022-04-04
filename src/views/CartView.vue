<script setup>
  import { ref, computed } from "vue";
  import { useCartStore } from "@/stores/cart";
  import ProductList from "@/components/ProductList.vue";
  import { getPix } from "@/services/api";

  const cartStore = useCartStore();
  const productsInCart = computed(() => cartStore.list);

  const urlQrCode = ref()

  const getQrCode = async (product, price) => {
    urlQrCode.value = await getPix(product, price)
  }
</script>

<template>
  <div>
    <h1>Cart (Em desenvolvimento!!!)</h1>

    <img :src="urlQrCode" alt="qrCode">

    <button @click="getQrCode('ração teste', '12.34')">click</button>

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
