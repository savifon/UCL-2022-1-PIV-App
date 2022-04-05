<script setup>
  import { computed, reactive } from "vue";
  import router from "@/router";
  import { useCartStore } from "@/stores/cart";
  import ModalApp from "@/components/ModalApp.vue";
  import ProductList from "@/components/ProductList.vue";
  import { formatPrice } from "@/utils/format";

  const cartStore = useCartStore();
  const productsInCart = computed(() => cartStore.list);
  const priceTotal = computed(() => cartStore.priceTotal);

  const checkout = async () => {
    modal.image = await cartStore.checkout();
    modal.open = true;
  };

  const modal = reactive({
    open: false,
    text: "Leia o QRCode abaixo no seu app de pagamento",
    image: "",
    actionPrimary: "Concluído"
  });

  const finishPurchase = () => {
    modal.open = false;
    router.push("/produtos");
  };
</script>

<template>
  <div>
    <ModalApp :modal="modal" @action-primary="finishPurchase" />

    <div class="cart-container">
      <h2>Sua cesta</h2>
      <div class="product-list">
        <template v-if="productsInCart.length > 0">
          <ProductList :products="productsInCart" />
          <p>
            Total:
            <span class="price">{{ formatPrice(priceTotal) }}</span>
          </p>
          <button class="btn-primary" @click="checkout">
            Confirmar pedido
          </button>
        </template>
        <template v-else>
          <p>Sua cesta está vazia</p>
        </template>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .cart-container {
    @apply flex flex-col items-start gap-4;

    > h2 {
      @apply text-xl font-semibold;
    }
  }
  .product-list {
    @apply flex flex-col items-start gap-5 w-full;

    .price {
      @apply text-lg font-semibold;
    }
  }
</style>
