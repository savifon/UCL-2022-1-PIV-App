<script setup>
  import { computed, reactive } from "vue";
  import { useCartStore } from "@/stores/cart";
  import ModalApp from "@/components/ModalApp.vue";
  import ProductList from "@/components/ProductList.vue";
  import { getPix } from "@/services/api";

  const cartStore = useCartStore();
  const productsInCart = computed(() => cartStore.list);
  const priceCart = computed(() => cartStore.priceTotal);

  const getQrCode = async (product, price) => {
    modal.qrCodeUrl = await getPix(product, price);
    modal.open = true;
  };

  const modal = reactive({
    open: false,
    title: "Confirme o pagamento",
    text: "Leia o QRCode abaixo no seu app de pagamento",
    qrCodeUrl: ""
  });
</script>

<template>
  <ModalApp
    :open="modal.open"
    :title="modal.title"
    :text="modal.text"
    :image="modal.qrCodeUrl"
  />
  <div class="cart-container">
    <h1>Sua cesta</h1>

    <div class="product-list">
      <ProductList :products="productsInCart" />
    </div>

    <button class="btn-primary" @click="getQrCode('Pedido', priceCart)">
      Confirmar pedido
    </button>
  </div>
</template>

<style lang="scss" scoped>
  .cart-container {
    @apply flex flex-col items-start gap-4;
  }

  .product-list {
    @apply flex flex-col gap-5;
  }
</style>
