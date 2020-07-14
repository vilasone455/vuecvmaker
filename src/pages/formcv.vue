<template>
  <div>
    <div>
      <h2>Section Personal</h2>
      <input v-model="cvdata.personal.name">
      <input v-model="cvdata.personal.lastname">
      <input v-model="cvdata.personal.sex">
      <input v-model="cvdata.personal.national">
      <input v-model="cvdata.personal.about">
      <input v-model="cvdata.personal.position">
    </div>
    <button @click="onConfrim">Preview Cv</button>
    <component :is="$route.params.cvid" :cvdata="cvdata"></component>
  </div>
</template>

<script>
import minimalcv from "../components/cvtemplate/minimalcv.vue";

export default {
  name: "cvpreview",
  props: {
    imgurl: String,
    cvname: String,
    cvlink: String
  },
  data() {
    return {
      cvdata: {
        personal: {
          name: "top",
          lastname: "phoungmixay",
          sex: "Male",
          national: "Lao",
          profileurl: "",
          about: "i want to be pirate king",
          position: "Developer"
        },
        contact: {
          tel: "",
          email: "",
          fb: "",
          twitter: "",
          github: ""
        },
        education: {
          schools: [
            {
              level: "HighSchool",
              schoolname: "Lao-viet School",
              start: "2011/9/1",
              end: "2018/6/1",
              major: ""
            }
          ]
        },
        experience : {
          [
            {company : "Laotop" , position : "IT Support" , timeperiod : "2020-1-1"},
            {company : "LaoIT" , position : "IT Teacher" , timeperiod : "2020-1-1"}
          ]
        },
        skill: {
          hardskill: [{ skillname: "Vue", level: 5, displaytype: "text" }],
          soft: [{ skillname: "teamwork", level: 5, displaytype: "text" }]
        },
        referenceperson: {
          persons: [
            {
              name: "mrtop",
              workform: "laotop",
              tel: ""
            }
          ]
        }
      }
    };
  },
  methods: {
    onConfrim() {
      this.$emit("onCvSave", this.cvdata);
    }
  },
  components: {
    minimalcv
  }
};
</script>


