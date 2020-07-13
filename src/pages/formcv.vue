<template>
  <div></div>
</template>

<script>
export default {
  name: "cvpreview",
  props: {
    imgurl: String,
    cvname: String,
    cvlink: String
  },
  datas() {
    return {
      cvdata: {
        personal: {
          name: "",
          lastname: "",
          sex: "Male",
          national: "Lao"
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
  }
};
</script>


