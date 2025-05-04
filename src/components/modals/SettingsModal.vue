<template>
  <div class="blackout"></div>
  <div class="modal-container">
    <div class="modal-box">
      <button @click="closeModal">&#10005;</button>
      <div>
        <label for="name">Change Name</label>
        <input type="text" id="name" name="name" v-model="name" />
      </div>
      <button @click="readName">click</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const name = ref('')

function readName() {
  console.log(name.value)
  return name.value
}
</script>

<style scoped>
.blackout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
}

.modal-container {
  position: fixed;
  background-color: aqua;
  z-index: 2;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
