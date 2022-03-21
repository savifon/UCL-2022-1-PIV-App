<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <!-- <header></header>
  <div id="content"></div>
  <footer></footer> -->

  <h1 class="text-3xl font-bold underline">OPAA</h1>

  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
/* @import "@/assets/base.css"; */
</style>
