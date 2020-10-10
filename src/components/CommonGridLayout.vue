<template>
  <b-container>
    <b-row v-for="row in rows" :key="row">
      <b-col v-for="col in cols" :key="`${type}-${row} - ${col}`" class="p-0">
        <CellItem
          v-model="data[(row - 1) * cols + col - 1]"
          :cell="(row - 1) * cols + col - 1"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { GridLayout, DataCell } from "@/common/types";
import { Component, Vue, Watch } from "vue-property-decorator";
import { mapMutations, mapState } from "vuex";
import CellItem from "@/components/CellItem.vue";

@Component({
  components: {
    CellItem,
  },
  computed: {
    ...mapState("grid", ["type"]),
    ...mapState("data", ["data"]),
  },
  methods: {
    ...mapMutations("data", ["initData"]),
  },
})
export default class CommonGridComponent extends Vue {
  type!: GridLayout;
  data!: (DataCell | null)[];
  initData!: (payload: { rows: number; cols: number }) => void;
  BOOTSTRAP_COL_GRID = 12;

  get layout(): number[] {
    return this.type.split("x").map(x => +x);
  }

  get rows(): number {
    return this.layout[0];
  }

  get cols(): number {
    return this.layout[1];
  }

  @Watch("type", { immediate: true })
  initDataOnTypeChnage() {
    this.initData({
      rows: this.rows,
      cols: this.cols,
    });
  }
}
</script>

<style scoped>
.cell {
  min-height: 100px;
}
</style>
