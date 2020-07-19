<template>
  <v-app id="app">
    <toolbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import toolbar from "./components/toolbar";
export default {
  name: "App",
  components: {
    toolbar
  }
};
</script>

<style>
</style>
