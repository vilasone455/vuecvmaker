<template>
  <v-container class="home" fluid style="margin-top:-0.3%">
    <v-row class="bg">
      <v-col cols="6">
        <div style="padding:17%">
          <h1
            class="font-weight-bold"
            style="font-size:40px"
          >Easy Resume Create Beautiful Resume In 5 minute</h1>
          <router-link to="/selectcv" style>
            <v-btn x-large color="red" rounded style="margin-top:4%;color:white">Create Resume</v-btn>
          </router-link>
        </div>
      </v-col>
      <v-col cols="6">
        <v-card width="350" style="margin:15%">
          <v-img
            src="https://salomonelli.github.io/best-resume-ever/static/img/resume-green.b3219b5.png"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="bg2" style="height:450px">
      <v-col cols="6">ffff</v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col>
        <h1>Resume Tip</h1>
      </v-col>
      <v-col>
        <h3>Coming soon</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "home",
  props: {}
};
</script>

<style scoped>
@import url("//fonts.googleapis.com/css?family=Open+Sans");
.home {
  font-family: Open Sans;
}
.bg {
  background-image: url("https://raw.githubusercontent.com/vilasone455/vuecvmaker/csb-2tclh/src/assets/banner-4.png");
}
.bg2 {
  background-image: url("https://raw.githubusercontent.com/vilasone455/vuecvmaker/ee53e581da28392a5f166d3ee3e121186c66aed9/src/assets/service-bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>



