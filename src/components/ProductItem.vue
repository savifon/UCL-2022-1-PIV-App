<script setup>
import { useCartStore } from '../stores/cart';

const cartStore = useCartStore();
const pathImages = import.meta.env.VITE_PATH_IMAGES;

defineProps({
  product: {
    image: String,
    name: String,
    price: Number,
  },
});
</script>

<template>
  <div class="product-item">
    <picture>
      <source :srcset="pathImages + product.image" type="image/jpg" />
      <img :src="pathImages + product.image" :alt="product.name" />
    </picture>

    <p>{{ product.name }}</p>
    <p>R$ {{ product.price }}</p>

    <div role="group">
      <button type="button" @click="cartStore.removeFromCart(product.id)">-</button>
      <input type="text" disabled :value="cartStore.countItem(product.id)" />
      <button type="button" class="add" @click="cartStore.addToCart(product.id)">+</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-item {
  @apply w-72 flex flex-col gap-2;

  > p {
    @apply text-center;
  }

  > div {
    @apply inline-flex;

    > button {
      @apply rounded-l-md inline-block px-6 py-1.5 bg-orange-100 text-white w-1/4;
    }

    > button.add {
      @apply bg-orange-900 rounded-l-none rounded-r-md;
    }

    > input {
      @apply text-center w-3/4 bg-gray-100;
    }
  }
}
</style>
