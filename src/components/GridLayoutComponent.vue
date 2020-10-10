<template>
  <div class="grid-layout">
    <component :is="gridTemplateComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import CommonGridLayout from "./CommonGridLayout.vue";
import SpecialGridLayout from "./SpecialGridLayout.vue";
import { COMMON_GRID_LAYOUT } from "@/common/constants";
import { GridLayout } from "@/common/types";

@Component({
  components: {
    CommonGridLayout,
    SpecialGridLayout,
  },
  computed: {
    ...mapState("grid", ["type"]),
  },
})
export default class GridLayoutComponent extends Vue {
  type!: GridLayout;

  get isCommonLayout(): boolean {
    // return this.type in CommonG;rid;
    return COMMON_GRID_LAYOUT.includes(this.type);
  }

  get gridTemplateComponent() {
    if (this.isCommonLayout) {
      return "CommonGridLayout";
    } else {
      return "SpecialGridLayout";
    }
  }
}
</script>

<style scoped></style>
