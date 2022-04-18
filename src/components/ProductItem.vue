<script lang="ts" setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
import { formatPrice } from "@/utils/format";
import router from "@/router";
import { Product } from "@/types/types";

defineProps<{
  product: Product;
}>();

const cartStore = useCartStore();
const pathImages = `${import.meta.env.VITE_GIT_REPO}${
  import.meta.env.VITE_GIT_PATH_IMAGES
}`;

const currentUrlPath = computed(() => router.currentRoute.value.path);
</script>

<template>
  <div
    class="product-item"
    :class="{ 'product-item-cart': currentUrlPath === '/pedido' }"
  >
    <img :src="pathImages + product.image" :alt="product.name" />

    <div class="details">
      <p>{{ product.name }}</p>
      <p>{{ formatPrice(product.price) }}</p>

      <div class="group-buttons" role="group">
        <button type="button" @click="cartStore.removeFromCart(product.id)">
          -
        </button>
        <input type="text" disabled :value="cartStore.countItem(product.id)" />
        <button
          type="button"
          class="add"
          @click="cartStore.addToCart(product.id)"
        >
          +
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-item {
  @apply w-80 flex-col flex gap-2;

  > img {
    @apply rounded-md;
  }

  p {
    @apply text-center;
  }

  .group-buttons {
    @apply inline-flex;

    button {
      @apply rounded-l-md rounded-r-none inline-block bg-orange-400 text-white text-center;
    }

    button.add {
      @apply bg-orange-900 rounded-l-none rounded-r-md;
    }

    input {
      @apply text-center w-2/4 bg-gray-100;
    }
  }
}

.product-item-cart {
  @apply flex-row w-full items-center;

  > img {
    @apply w-48 h-auto;
  }

  p {
    @apply text-left whitespace-nowrap;
  }

  .group-buttons {
    @apply flex;

    button {
      @apply w-16;
    }

    input {
      @apply w-16;
    }
  }
}
</style>
