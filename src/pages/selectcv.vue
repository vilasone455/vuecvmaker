<template>
  <div class="home">
    <a href="https://github.com/salomonelli/best-resume-ever" target="_blank"></a>
    <div class="logo">
      <img src="../assets/logo_size.png">
    </div>
    <h3 class="title">Cv Maker</h3>
    <cvpreview
      v-for="c in cvlist"
      :key="c.cname"
      :cvname="c.cname"
      :cvlink="c.link"
      :imgurl="c.url"
    />
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
        {
          link: "formcv/minimalcv",
          cname: "minimal",
          url: "https://cdn.goskills.com/blobs/blogs/294/1.png"
        },
        {
          link: "formcv/classiccv",
          cname: "basic",
          url:
            "https://raw.githubusercontent.com/salomonelli/best-resume-ever/master/src/assets/preview/resume-side-bar-rtl.png"
        }
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
</style>


