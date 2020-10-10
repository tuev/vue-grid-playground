<template>
  <div class="grid_82">
    <div class="top">
      <div class="item" v-for="i in 4" :key="i - 1">
        <CellItem v-model="data[i - 1]" :cell="i - 1" />
      </div>
    </div>
    <div class="middle_left">
      <CellItem v-model="data[4]" :cell="4" />
    </div>
    <div class="middle_right">
      <CellItem v-model="data[5]" :cell="5" />
    </div>
    <div class="bottom">
      <div class="item" v-for="i in 4" :key="i + 5">
        <CellItem v-model="data[i + 5]" :cell="i + 5" />
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
export default class SpecialGrid82 extends Vue {
  data!: (DataCell | null)[];
  initDataByCells!: (cells: number) => void;
  created() {
    this.initDataByCells(10);
  }
}
</script>

<style lang="scss" scoped>
.grid_82 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.top {
  grid-column: 1 /5;
  grid-row: 1 / 2;
  display: flex;
}

.middle_left {
  grid-column: 1 / 3;
  grid-row: 2 / 4;
}

.middle_right {
  grid-column: 3 / 5;
  grid-row: 2 / 4;
}

.bottom {
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  display: flex;
}
</style>
