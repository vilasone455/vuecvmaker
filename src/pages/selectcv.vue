<template>
  <div>
    <div>CV List</div>
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


