<template>
  <div class="cell-item border p-4 h-100">
    <b-select v-model="selected" :options="options" size="sm">
      <template v-slot:first>
        <b-form-select-option :value="null" disabled>
          Please select an option
        </b-form-select-option>
      </template>
    </b-select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import mock from "@/common/mock.json";
import { DataCell } from "@/common/types";
import { mapGetters, mapMutations } from "vuex";

@Component({
  props: {
    value: Object,
    cell: Number,
  },
  computed: {
    ...mapGetters("data", ["validData"]),
  },
  methods: {
    ...mapMutations("data", ["removeData"]),
  },
})
export default class CellItem extends Vue {
  value!: DataCell | null;
  validData!: DataCell[];
  cell!: number;
  removeData!: (cell: number) => void;
  options = mock;

  get selected(): number | null {
    return !this.value ? null : this.value.id;
  }

  set selected(value) {
    const existData = this.validData.find(item => item.id === value);
    if (existData !== undefined) {
      this.removeData(existData.cell);
    }
    this.$nextTick(() =>
      this.$emit(
        "input",
        value === null ? null : { cell: this.cell, id: value }
      )
    );
  }
}
</script>

<style scoped>
.cell-item {
}
</style>
