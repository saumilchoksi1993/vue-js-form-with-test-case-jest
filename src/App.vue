<template>
  <RegistrationForm />
</template>

<script>
import '@/assets/tailwind.css';
import RegistrationForm from './components/RegistrationForm.vue'

export default {
  name: 'App',
  components: {
    RegistrationForm
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
