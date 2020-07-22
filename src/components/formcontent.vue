<template>
  <div>
    <personal :cvdata="cvdata"/>
  </div>
</template>

<script>
import personal from "./formstep/personal";

export default {
  name: "formcontent",
  props: {
    cvdata: Array
  },
  components: {
    personal
  }
};
</script>


