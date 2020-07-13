<template>
  <div>
    <basecv :cv="cv">
      <div>My name is : {{cv.personal.name}}</div>
      <div>My lastname is : {{cv.personal.lastname}}</div>
    </basecv>
  </div>
</template>

<script>
import basecv from "../basecv.vue";

export default {
  name: "basecv",
  props: {
    cvdata: Array
  },
  components: {
    basecv
  }
};
</script>


