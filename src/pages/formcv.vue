<template>
  <div class="page-wrapper">
    <div class="page" :id="$route.params.resumeid">
      <div class="page-inner">
        <component :is="$route.params.cvid" :cvdata="cvdata"></component>
      </div>
    </div>
    <div v-if="true" class="formsection">
      <div v-for="(cv,name) in cvdata" :key="name">
        <h2>{{name.toUpperCase()}}</h2>
        <div v-for="(cvhead,name) in cv" :key="name">
          <label>{{ name }}</label>
          <input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import minimalcv from "../components/cvtemplate/minimalcv.vue";

import classiccv from "../components/cvtemplate/classiccv.vue";
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
          profileurl:
            "https://raw.githubusercontent.com/salomonelli/best-resume-ever/master/src/assets/profile-images/guy.png",
          about: "i want to be pirate king",
          position: "Developer"
        },
        contact: {
          tel: "02055114566",
          email: "top@gmail.com",
          fb: "topphoumgixay",
          twitter: "",
          github: "vilasone455",
          street: "Sokham Village",
          city: "Saysettha"
        },
        education: {
          schools: [
            {
              level: "HighSchool",
              schoolname: "Lao-viet School",
              start: "2011/9/1",
              end: "2018/6/1",
              major: ""
            },
            {
              level: "University",
              schoolname: "Lao-Top College",
              start: "2018/10/11",
              end: "Present",
              major: "Information Technology"
            }
          ]
        },
        experience: [
          { company: "Laotop", position: "IT Support", timeperiod: "2020-1-1" },
          { company: "LaoIT", position: "IT Teacher", timeperiod: "2020-1-1" }
        ],
        skill: {
          hardskill: [
            { skillname: "Vue", level: 5, displaytype: "text" },
            { skillname: "Angular", level: 5, displaytype: "text" },
            { skillname: "C#.Net", level: 5, displaytype: "text" },
            { skillname: "Javascript", level: 5, displaytype: "text" }
          ],
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
  mounted() {
    console.log(this.cvdata.personal.name);
  },
  components: {
    minimalcv,
    classiccv
  }
};
</script>

<style scoped>
.page-inner {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
  background: #CCCCCC;
  margin: 0;
  padding: 0;
  -webkit-print-color-adjust: exact;
  box-sizing: border-box;
}
.resume {
  height: 100%;
  width: 100%;
}
.page {
  background: white;
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: block;
  page-break-after: auto;
  overflow: hidden;
  float: left;
}
</style>


