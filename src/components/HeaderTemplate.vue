<template>
  <header>
    <img src="../assets/knife-logo.png" alt="Logo for Quick Thaw App." />
    <h1>Quick Thaw</h1>
    <button><img src="../assets/setting.png" alt="Settings Menu" /></button>
  </header>
</template>

<script setup></script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: darkgray;
}
header img {
  max-width: 50px;
  max-height: 50px;
}

h1 {
  font-size: 2rem;
  font-weight: bold;
}
</style>
