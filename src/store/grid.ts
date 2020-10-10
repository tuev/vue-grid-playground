import { COMMON_GRID_LAYOUT, SPECIAL_GRID_LAYOUT } from "../common/constants";
import { CommonGrid } from "../common/enums";
import { GridLayout } from "../common/types";

export interface GridState {
  type: GridLayout;
}

const state: GridState = {
  type: CommonGrid["1x1"],
};

const getters = {
  isSpecialLayout: (state: GridState) => {
    return SPECIAL_GRID_LAYOUT.includes(state.type);
  },
  isCommonLayout: (state: GridState) => {
    return COMMON_GRID_LAYOUT.includes(state.type);
  },
};

const mutations = {
  setGrid(state: GridState, type: GridLayout) {
    state.type = type;
  },
};

const grid = {
  state,
  mutations,
  getters,
  namespaced: true,
};
export default grid;
