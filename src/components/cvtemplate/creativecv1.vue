<template>
  <v-container fluid id="resume">
    <v-row no-gutters>
      <v-col cols="12">
        <v-sheet elevation="11" color="orange" tile>
          <v-col cols="4">
            <v-avatar size="110" style="float:left">
              <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
            </v-avatar>
          </v-col>

          <v-col cols="8">
            <h1
              class="text-uppercase font-weight-bold"
              style="color:white;"
            >{{cvdata.personal.name}} {{cvdata.personal.lastname}}</h1>
            <p class="text-uppercase" style="color:white">{{cvdata.personal.position}}</p>
          </v-col>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="5">
        <v-sheet elevation="3" height="780" tile>
          <div>
            <h2
              style="color:orange;padding-top:10%;padding-left:5%;text-shadow: 1px 1px 0.5px #ffff;"
              class="text-uppercase justify-center"
            >About me</h2>
            <p style="padding-top:5%;padding-left:5%">
              Hi i am vilasone , i want to be developer ,
              in hobby i like play game , programming
            </p>
          </div>

          <div>
            <h2
              style="color:orange;padding-top:10%;padding-left:5%;text-shadow: 1px 1px 0.5px #ffff;"
              class="text-uppercase justify-center"
            >Profesanal Skill</h2>
            <div>
              <div style="margin-top:2%">
                <h4 style="float:left;padding-top:3%;padding-left:5%" class="text-uppercase">Css</h4>
                <v-rating color="black"></v-rating>
              </div>
              <div style="margin-top:2%">
                <h4 style="float:left;padding-top:3%;padding-left:5%" class="text-uppercase">Css</h4>
                <v-rating color="black"></v-rating>
              </div>
              <div style="margin-top:2%">
                <h4 style="float:left;padding-top:3%;padding-left:5%" class="text-uppercase">Css</h4>
                <v-rating color="black"></v-rating>
              </div>
            </div>
          </div>
          <div>
            <h2
              style="color:orange;padding-top:10%;padding-left:5%;text-shadow: 1px 1px 0.5px #ffff;"
              class="text-uppercase justify-center"
            >contact</h2>
            <div class="contact">
              <v-icon style="float:left">map</v-icon>
              <p>sokham , saysettha , vientiane</p>
            </div>
            <div class="contact">
              <v-icon style="float:left">phone</v-icon>
              <p>020 5511 3344</p>
            </div>
            <div class="contact">
              <v-icon style="float:left">email</v-icon>
              <p>topster@hotmail.com</p>
            </div>
          </div>
        </v-sheet>
      </v-col>
      <v-col cols="7">
        <v-sheet color="orange darken-1" elevation="3" height="780" tile>
          <div class="section">
            <h2 style="padding:8%;color:white">JOB EXPERINCE</h2>
            <div class="listjob"></div>
          </div>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "creativecv1",
  props: {
    cvdata: Array,
    fontname: String
  }
};
</script>

<style scoped>
@import url("//fonts.googleapis.com/css?family=Open+Sans");

.orange {
  color: "#FF980";
}

.contact {
  padding-top: 4%;
}

.contact .v-icon {
  padding-left: 4%;
}

.contact p {
  padding-left: 40px;
}
</style>



