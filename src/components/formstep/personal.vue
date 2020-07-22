<template>
  <v-stepper-content step="1" style="margin-top:-4%">
    <v-row>
      <v-col class="justify-center">
        <h2 class="font-weight-medium" style="color:#5c6bc0">Personal Information</h2>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <v-text-field label="Name" filled v-model="cvdata.personal.name"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="Lastname" filled v-model="cvdata.personal.lastname"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Age" filled v-model="cvdata.personal.age"></v-text-field>
      </v-col>
      <v-col cols="6">
        <v-text-field label="National" filled v-model="cvdata.personal.national"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field label="Position" filled v-model="cvdata.personal.position"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-textarea
          filled
          label="Summary"
          value="The Woodman set to work at onces, and so sharp was his axe that the tree was soon chopped nearly through."
          v-model="cvdata.personal.about"
        ></v-textarea>
      </v-col>
    </v-row>
  </v-stepper-content>
</template>

<script>
export default {
  name: "personal",
  props: ["cvdata"]
};
</script>


