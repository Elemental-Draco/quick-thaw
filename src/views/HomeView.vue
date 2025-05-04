<script setup>
import { ref } from 'vue'
let date = ref(new Date())
</script>

<template>
  <main>
    <div>
      <p>{{ date.toDateString() }}</p>
      <p>Hello, User!</p>
    </div>

    <div class="ul-holder">
      <ul>
        <li><RouterLink to="/">Start New Pull</RouterLink></li>
        <li><RouterLink to="#">View Previous Pulls</RouterLink></li>
        <li><RouterLink to="#">Adjust Pars</RouterLink></li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  flex-grow: 1;
}

.ul-holder {
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
}
div p {
  font-size: 1.7rem;
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
}

ul {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
  max-width: 500px;
}

li {
  background-color: rgb(46, 46, 46);
  border-radius: 10px;
  width: 100%;
}

a {
  display: block;
  text-decoration: none;
  color: white;

  padding: 20px;
}
</style>
