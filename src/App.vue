<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderTemplate from './components/HeaderTemplate.vue'
import FooterTemplate from './components/FooterTemplate.vue'
</script>

<template>
  <HeaderTemplate />
  <RouterView></RouterView>
  <FooterTemplate />
</template>

<style scoped></style>
