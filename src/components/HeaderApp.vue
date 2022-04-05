<script setup>
  import { RouterLink } from "vue-router";
  import IconShoppingBasket from "@/components/icons/IconShoppingBasket.vue";

  defineProps({
    countCart: Number
  });
</script>

<template>
  <header class="header-app">
    <div>
      <RouterLink class="logo" to="/"> PI-V App </RouterLink>

      <div>
        <nav>
          <RouterLink to="/produtos"> Produtos </RouterLink>
          <RouterLink to="/pedido">
            Minha cesta ({{ countCart }})
            <IconShoppingBasket />
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  .header-app {
    @apply flex justify-center shadow-lg;

    > div {
      @apply flex justify-between items-center w-11/12 py-1;

      > .logo {
        @apply text-2xl font-semibold text-orange-900;
      }

      > div {
        @apply flex items-center gap-2;

        > nav {
          @apply flex gap-2;

          > a {
            @apply flex items-center gap-2 py-3 h-12 px-2 rounded-md hover:bg-gray-100 transition-all;
          }
        }
      }
    }
  }
</style>
