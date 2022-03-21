<script setup>
import { RouterView } from "vue-router";
import HeaderApp from "./components/HeaderApp.vue";
</script>

<template>
  <!-- <div id="content"></div>
  <footer></footer> -->
  <HeaderApp />

  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
