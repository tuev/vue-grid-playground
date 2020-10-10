<template>
  <div class="grid_121">
    <div class="top">
      <div class="item" v-for="i in 4" :key="i - 1">
        <CellItem v-model="data[i - 1]" :cell="i - 1" />
      </div>
    </div>
    <div class="left">
      <div class="item" v-for="i in 2" :key="i + 3">
        <CellItem v-model="data[i + 3]" :cell="i + 3" />
      </div>
    </div>
    <div class="main">
      <CellItem v-model="data[6]" :cell="6" />
    </div>
    <div class="right">
      <div class="item" v-for="i in 2" :key="i + 6">
        <CellItem v-model="data[i + 6]" :cell="i + 6" />
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="i in 4" :key="i + 8">
        <CellItem v-model="data[i + 8]" :cell="i + 8" />
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
export default class SpecialGrid71 extends Vue {
  data!: (DataCell | null)[];
  initDataByCells!: (cells: number) => void;
  created() {
    this.initDataByCells(8);
  }
}
</script>

<style lang="scss" scoped>
.grid_121 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.top {
  grid-column: 1 /5;
  grid-row: 1 / 2;
  display: flex;
}

.left {
  grid-column: 1 /2;
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
}

.main {
  grid-column: 2 /4;
  grid-row: 2 / 4;
}

.right {
  grid-column: 4 / 5;
  grid-row: 2 / 4;
  display: flex;
  flex-direction: column;
}

.bottom {
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  display: flex;
}
</style>
