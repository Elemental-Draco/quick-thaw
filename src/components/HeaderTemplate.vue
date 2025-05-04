<template>
  <header>
    <img src="../assets/knife-logo.png" alt="Logo for Quick Thaw App." />
    <h1>Quick Thaw</h1>
    <button @click="toggleSettingsModal">
      <img src="../assets/setting.png" alt="Settings Menu" />
    </button>
  </header>
  <SettingsModal v-if="showSettings" @closeModal="toggleSettingsModal" />
</template>

<script setup>
import SettingsModal from './modals/SettingsModal.vue'
import { ref } from 'vue'

const showSettings = ref(false)

function toggleSettingsModal() {
  showSettings.value = !showSettings.value
}
</script>

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

button {
  background: none;
  outline: none;
  text-decoration: none;
  border: none;
}

button:hover {
  cursor: pointer;
}

button:focus {
  outline: blue 3px solid;
}
</style>
