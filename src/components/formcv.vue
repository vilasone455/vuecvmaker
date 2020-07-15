<template>
  <div>
    <md-steppers md-vertical >
      <md-step
        v-for="(cv,names) in cvdata"
        :id="names"
        :key="names"
        :md-label="names.toUpperCase()"
        md-description="Optional"
      >
        <div v-for="(cvhead,infoname) in cv" :key="infoname">
          <div v-if="isArrayData(cvhead)">
            <div v-for="(l,lindex) in cvhead">
              <p>{{infoname}} - {{lindex+1}} </p>
              <md-field v-for="lhead in l">
              <label>{{ lhead }}</label>
              <md-input></md-input>
            </md-field>
            </div>
 
          </div>
          <div v-else>
            <md-field>
              <label>{{ infoname }}</label>
              <md-input v-model="cvdata[names][infoname]"></md-input>
            </md-field>
          </div>
        </div>
      </md-step>
    </md-steppers>
  </div>
</template>

<script>
import Vue from "vue";
import {
  MdButton,
  MdContent,
  MdTabs,
  MdField,
  MdLayout,
  MdSteppers
} from "vue-material/dist/components";

import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";

Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);
Vue.use(MdField);
Vue.use(MdLayout);
Vue.use(MdSteppers);

export default {
  name: "formcv",
  props: {
    cvdata: Object
  },
  methods: {
    isArrayData(v) {
      return Array.isArray(v);
    }
  }
};
</script>

<style scoped>
</style>

