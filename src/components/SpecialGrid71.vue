<template>
  <div class="grid_71">
    <div class="main">
      <CellItem v-model="data[0]" :cell="0" />
    </div>
    <div class="right">
      <div class="item" v-for="i in 3" :key="i">
        <CellItem v-model="data[i]" :cell="i" />
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="i in 4" :key="i + 3">
        <CellItem v-model="data[i + 3]" :cell="i + 3" />
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
.grid_71 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
}

.main {
  grid-column: 1 /4;
  grid-row: 1 / 4;
}

.right {
  grid-column: 4 / 5;
  grid-row: 1 / 4;
  display: flex;
  flex-direction: column;
}

.bottom {
  grid-column: 1 / 5;
  grid-row: 4 / 5;
  display: flex;
}
</style>
