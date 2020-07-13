<template>
  <div>
  <img :src="imgurl" @click="cvclick"  />
  </div>
</template>

<script>
export default {
  name: "cvpreview",
  props: {
    imgurl: String,
    cvname : String,
    cvlink : String
  },
  methods : {
    cvclick(){
      this.$router.push({path:this.cvlink})
    }
  }
};
</script>


