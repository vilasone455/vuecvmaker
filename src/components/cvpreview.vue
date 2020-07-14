<template>
  <div>
    <router-link v-bind:to="'/formcv/minimalcv'">
      <div class="preview-wrapper">
        <img src="../assets/cv1.png">
        <span>{{cvname}}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "cvpreview",
  props: {
    imgurl: String,
    cvname: String,
    cvlink: String
  }
};
</script>


