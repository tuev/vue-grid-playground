<template>
  <b-form-radio-group v-model="layoutType" name="radio-sub-component">
    <b-form-radio :value="layout" v-for="layout in gridType" :key="layout">{{
      layout
    }}</b-form-radio>
  </b-form-radio-group>
</template>

<script lang="ts">
import { GRID_LAYOUTS } from "@/common/constants";
import { GridLayout } from "@/common/types";
import { Component, Vue } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";

@Component({
  computed: {
    ...mapState("grid", ["type"]),
  },
  methods: {
    ...mapMutations("grid", ["setGrid"]),
  },
})
export default class GridSelect extends Vue {
  gridType: GridLayout[] = GRID_LAYOUTS;
  type!: GridLayout;
  setGrid!: (grid: GridLayout) => void;

  get layoutType() {
    return this.type;
  }

  set layoutType(value) {
    this.setGrid(value);
  }
}
</script>

<style></style>
