<template>
  <div>
    <md-toolbar md-elevation="2">
      <md-button >
        <img src="../assets/logo4.png" style="width:57.5%;">
      </md-button>
      <md-button style="float : left">Contact</md-button>
      <md-button>Create Cv</md-button>
      <md-button>Create Letter</md-button>
      <md-button class="md-primary">Home</md-button>
    </md-toolbar>
  </div>
</template>

<script>
import Vue from "vue";
import { MdToolbar, MdButton } from "vue-material/dist/components";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdToolbar);
Vue.use(MdButton);

export default {
  name: "toolbar"
};
</script>


