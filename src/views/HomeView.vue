<script lang="ts" setup>
  import { RouterLink } from "vue-router";
</script>

<template>
  <div class="h-[90vh] flex flex-col gap-5 items-center justify-center">
    <img
      src="/assets/images/logo_pra_mia.png"
      alt="ONG Pra Mia"
      class="w-2/4"
    />
    <p>
      Transformando a Vida de Animais em Situação de Vulnerabilidade.
      <br />
      Adquira uma quantidade de alimento para pet e apoie esta causa.
    </p>
    <RouterLink to="/produtos">
      <button class="btn-primary">Apoiar a ONG</button>
    </RouterLink>
  </div>
</template>
