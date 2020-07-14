<template>
  <div class="home">
    <a href="https://github.com/salomonelli/best-resume-ever" target="_blank"></a>
    <div class="logo">
      <img src="../assets/logo.png">
    </div>
    <h3 class="title">Top-Cv-Maker</h3>
    <cvpreview v-for="c in cvlist" :cvname="c.cname" :imgurl="c.url"/>
  </div>
</template>

<script>
import cvpreview from "../components/cvpreview.vue";

export default {
  name: "selecv",
  props: {},
  methods: {},
  data() {
    return {
      cvlist: [
        { cname: "minimal", url: "./assets/cv1.png" },
        { cname: "basic", url: "./assets/cv1.png" }
      ]
    };
  },
  components: {
    cvpreview
  }
};
</script>

<style scoped>



.home {
  font-family: "Roboto" !important;
}
.logo {
  text-align: center;
}
.logo img {
  height: 50px;
  margin-top: 40px;
}
.title {
  font-weight: normal;
  text-align: center;
  width: 100%;
  color: black;
  font-weight: 300;
  font-size: 30px;
  line-height: 110%;
  margin: 1.78rem 0 1.424rem 0;
  margin-top: 0px;
  margin-bottom: 40px;
}
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


