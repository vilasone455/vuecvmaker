<template>
  <div class="preview">
    <router-link v-bind:to="cvlink">
      <div class="preview-wrapper">
        <img :src="imgurl">
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

<style scoped>
.previews {
  width: 90%;
  margin-right: auto;
  margin-left: auto;
}
.preview {
  width: 180px;
  float: left;
  margin-left: 1.5%;
  margin-right: 1.5%;
  margin-bottom: 1.5%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  height: 252px;
  overflow: hidden;
}
.preview-wrapper {
  position: relative;
  background: white;
}
.preview img {
  width: 100%;
  opacity: 0.5;
  filter: blur(1px);
}
.preview span {
  position: absolute;
  max-width: 100%;
  font-size: 24px;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.75);
  width: 100%;
  text-align: center;
  display: inline-block;
  top: 50%;
  transform: translateY(-50%);
}
</style>


