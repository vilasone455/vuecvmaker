<template>
  <div class="page-wrapper">
    <v-stepper value="1" alt-labels>
      <v-row>
        <v-col cols="12">
          <v-stepper-header class="elevation-0">
            <v-stepper-step step="1">Personal</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="2">Contact</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="3">Education</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="4">Work Experince</v-stepper-step>
            <v-divider></v-divider>
            <v-stepper-step step="5">Finish</v-stepper-step>
          </v-stepper-header>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <formcontent :cvdata="cvdata"/>
        </v-col>
        <div class="page" :id="$route.params.resumeid">
          <div class="page-inner">
            <v-sheet @click="preview = true" class="pointer">
              <component :is="$route.params.cvid" :cvdata="cvdata" @click="preview = true"></component>
            </v-sheet>
          </div>
        </div>
        <v-dialog width="21cm" height="29cm" v-model="preview">
          <v-sheet>
            <component :is="$route.params.cvid" :cvdata="cvdata"></component>
          </v-sheet>
        </v-dialog>
      </v-row>
    </v-stepper>
  </div>
</template>

<script>
import minimalcv from "../components/cvtemplate/minimalcv.vue";
import classiccv from "../components/cvtemplate/classiccv.vue";
import coolcv from "../components/cvtemplate/coolcv.vue";
import creativecv1 from "../components/cvtemplate/creativecv1.vue";
import formcontent from "../components/formcontent.vue";

export default {
  name: "createcv",
  props: {
    imgurl: String,
    cvname: String,
    cvlink: String
  },
  data() {
    return {
      preview: false,
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
          {
            company: "Laotop",
            position: "IT Support",
            timeperiod: "2020-1-1",
            endperiod: "2020-4-4",
            description: ""
          },
          {
            company: "LaoIT",
            position: "IT Teacher",
            timeperiod: "2020-1-1",
            endperiod: "2020-7-4",
            description: ""
          }
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
    console.log(this.cvdata["personal"].name);
  },
  components: {
    minimalcv,
    classiccv,
    coolcv,
    creativecv1,
    formcontent
  }
};
</script>

<style scoped>

.pointer {cursor: pointer;}

.page-inner {
  height: 100%;
  width: 100%;
}
.page-wrapper {
  overflow-x: hidden;
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
  position: relative;
  width: 21cm;
  height: 29.68cm;
  display: block;
  transform: scale(0.5);
  margin: -12%;
  page-break-after: auto;
  overflow: hidden;
  float: left;
}
</style>


