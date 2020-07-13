<template>
  <div>
    <slot :cv="cvdata"></slot>
  </div>
</template>

<script>
export default {
  name: "basecv",
  props: {
    cvdata: Array
  }
};
</script>


