<script setup>
import { ref } from "vue";
import IconSearch from "./icons/IconSearch.vue";

const query = ref('');
</script>

<template>
  <div class="search-app">
    <input type="text" placeholder="Pesquisar produto" v-model="query" />
    <IconSearch class="icon" />
  </div>
</template>

<style lang="scss" scoped>
.search-app {
  @apply flex items-center gap-2 pr-4 rounded-md bg-gray-100;

  > input {
    @apply bg-gray-100 py-3 h-12 px-5 rounded-md w-96;
  }

  > .icon {
    @apply py-1;
  }
}
</style>
