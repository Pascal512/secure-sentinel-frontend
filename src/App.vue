<template>
  <DebutOnboarding />
  <DarkModeSwitch />
</template>

<script>
import DarkModeSwitch from './components/DarkModeSwitch.vue';
import DebutOnboarding from './components/DebutOnboarding.vue'

export default {
  name: 'App',
  components: {
    DebutOnboarding,
    DarkModeSwitch
  }
}
</script>

<style>

</style>
