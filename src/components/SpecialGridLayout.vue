<template>
  <div>
    <component :is="specialComponent" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState } from "vuex";
import SpecialGrid31 from "@/components/SpecialGrid31.vue";
import SpecialGrid51 from "@/components/SpecialGrid51.vue";
import SpecialGrid71 from "@/components/SpecialGrid71.vue";
import SpecialGrid82 from "@/components/SpecialGrid82.vue";
import SpecialGrid121 from "@/components/SpecialGrid121.vue";

import { GridLayout } from "@/common/types";
import { SpecialGrid } from "@/common/enums";

@Component({
  components: {
    SpecialGrid31,
    SpecialGrid51,
    SpecialGrid71,
    SpecialGrid82,
    SpecialGrid121,
  },
  computed: {
    ...mapState("grid", ["type"]),
  },
})
export default class SpecialGridLayout extends Vue {
  type!: GridLayout;

  get specialComponent() {
    switch (this.type) {
      case SpecialGrid["12+1"]:
        return SpecialGrid121;
      case SpecialGrid["8+2"]:
        return SpecialGrid82;
      case SpecialGrid["7+1"]:
        return SpecialGrid71;
      case SpecialGrid["5+1"]:
        return SpecialGrid51;
      default:
        return SpecialGrid31;
    }
  }
}
</script>

<style></style>
