<template>
  <div>
    <div>{{cvdata.personal.name}}</div>
    <div>{{cvdata.personal.lastname}}</div>
   <div>{{cvdata.personal.sex}}</div>
  </div>
</template>

<script>
export default {
  name: "minimalcv",
  props : {
    cvdata : Array
  }
};
</script>


