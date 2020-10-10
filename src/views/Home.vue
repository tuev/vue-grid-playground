<template>
  <b-container>
    <GridSelect />
    <div class="my-4">
      <GridLayoutComponent />
    </div>
    <b-row>
      <b-col align-self="center">
        <b-button @click="handleSubmit">SUBMIT</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import GridSelect from "@/components/GridSelect.vue";
import GridLayoutComponent from "@/components/GridLayoutComponent.vue";
import { mapGetters, mapState } from "vuex";
import { GridLayout, DataCell } from "@/common/types";

@Component({
  components: { GridSelect, GridLayoutComponent },
  computed: {
    ...mapGetters("data", ["validData"]),
    ...mapState("grid", ["type"]),
  },
})
export default class Home extends Vue {
  validData!: DataCell[];
  type!: GridLayout;

  handleSubmit() {
    console.log({
      layout: this.type,
      force: this.validData,
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
