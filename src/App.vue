<template>
  <div id="app">
    <NavigationBar />
    <router-view />
  </div>
</template>

<script>
import NavigationBar from "./components/Features/NavigationBar.vue"

export default {
  name: "App",
  components: {
    NavigationBar,
  },
};
</script>

<style>
/* Add any global styles you need */
</style>
