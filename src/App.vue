<template>
  <div id="app">
    <toolbar/>
    <router-view></router-view>
  </div>
</template>

<script>

import toolbar from "./components/toolbar.vue";
export default {
  name: "App",
  components: {
    toolbar
  }
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  overflow-x: hidden;
}
</style>
