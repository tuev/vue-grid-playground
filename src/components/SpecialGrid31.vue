<template>
  <div class="grid_31">
    <div class="main">
      <CellItem v-model="data[0]" :cell="0" />
    </div>
    <div class="right">
      <div class="item" v-for="i in 3" :key="i">
        <CellItem v-model="data[i]" :cell="i" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CellItem from "@/components/CellItem.vue";
import { mapMutations, mapState } from "vuex";
import { DataCell } from "@/common/types";

@Component({
  components: {
    CellItem,
  },
  computed: {
    ...mapState("data", ["data"]),
  },
  methods: {
    ...mapMutations("data", ["initDataByCells"]),
  },
})
export default class SpecialGrid31 extends Vue {
  data!: (DataCell | null)[];
  initDataByCells!: (cells: number) => void;
  created() {
    this.initDataByCells(4);
  }
}
</script>

<style lang="scss" scoped>
.grid_31 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.main {
  grid-column: 1 / 3;
  grid-row: 1 / 4;
}

.right {
  grid-column: 3 / 4;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
}
</style>
