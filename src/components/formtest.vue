<template>
  <div>
    <mdb-container>
      <mdb-row>
        <mdb-col col="6">
          <mdb-input type="text" label="Name" bg/>
        </mdb-col>
        <mdb-col col="6">
          <mdb-input type="text" label="Name" bg/>
        </mdb-col>
      </mdb-row>
    </mdb-container>

    <mdb-stepper simpleV :steps="4">
      <template #1>FFF</template>
      <template #2>
        <form>
          <mdb-input type="number" label="Tel" bg/>
        </form>
      </template>
      <template #3>
        <form></form>
      </template>
      <template #4>
        <p>Finish!</p>
      </template>
    </mdb-stepper>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import "mdbvue/lib/css/mdb.min.css";
import { mdbStepper, mdbContainer, mdbInput, mdbRow, mdbCol } from "mdbvue";
export default {
  name: "formtest",
  components: {
    mdbStepper,
    mdbInput,
    mdbContainer,
    mdbRow,
    mdbCol
  }
};
</script>

<style>
@import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
</style>