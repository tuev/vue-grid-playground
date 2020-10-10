import { CommonGrid, SpecialGrid } from "@/common/enums";
import { GridLayout } from "./types";

export const COMMON_GRID_LAYOUT: GridLayout[] = [
  CommonGrid["1x1"],
  CommonGrid["1x2"],
  CommonGrid["2x2"],
  CommonGrid["3x3"],
  CommonGrid["4x4"],
  CommonGrid["4x5"],
];

export const SPECIAL_GRID_LAYOUT: GridLayout[] = [
  SpecialGrid["3+1"],
  SpecialGrid["5+1"],
  SpecialGrid["7+1"],
  SpecialGrid["8+2"],
  SpecialGrid["12+1"],
];

export const GRID_LAYOUTS = [...COMMON_GRID_LAYOUT, ...SPECIAL_GRID_LAYOUT];
