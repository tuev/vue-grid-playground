import { DataCell } from "./../common/types";
export interface DataState {
  data: (DataCell | null)[];
}

const state: DataState = {
  data: [],
};

const getters = {
  validData: (state: DataState) => {
    return state.data.filter(Boolean);
  },
};

const mutations = {
  initData(state: DataState, template: { rows: number; cols: number }) {
    state.data = Array.from(
      { length: template.cols * template.rows },
      () => null
    );
  },
  initDataByCells(state: DataState, cells: number) {
    state.data = Array.from({ length: cells }, () => null);
  },
  setData(state: DataState, payload: { idx: number; data: number }) {
    state.data = state.data.map((item, index) => {
      const isStaleData = item?.id === payload.data;
      if (isStaleData || index !== payload.idx) return null;
      return { cell: payload.idx, id: payload.data };
    });
  },
  removeData(state: DataState, cell: number) {
    state.data = state.data.map((item, index) => {
      if (index !== cell) return item;
      return null;
    });
  },
};
const grid = {
  state,
  mutations,
  getters,
  namespaced: true,
};
export default grid;
