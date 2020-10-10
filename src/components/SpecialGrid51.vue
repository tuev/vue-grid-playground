<template>
  <div class="grid_51">
    <div class="main">
      <CellItem v-model="data[0]" :cell="0" />
    </div>
    <div class="right">
      <div class="item" v-for="i in 2" :key="i">
        <CellItem v-model="data[i]" :cell="i" />
      </div>
    </div>
    <div class="bottom">
      <div class="item" v-for="i in 3" :key="i + 2">
        <CellItem v-model="data[i + 2]" :cell="i + 2" />
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
export default class SpecialGrid51 extends Vue {
  data!: (DataCell | null)[];
  initDataByCells!: (cells: number) => void;
  created() {
    this.initDataByCells(6);
  }
}
</script>

<style lang="scss" scoped>
.grid_51 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
}

.main {
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}

.right {
  grid-column: 3 / 3;
  grid-row: 1 / 3;
  display: flex;
  flex-direction: column;
}

.bottom {
  grid-column: 1 / 4;
  grid-row: 3 / 4;
  display: flex;
}
</style>
