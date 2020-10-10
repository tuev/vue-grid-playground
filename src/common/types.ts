import { CommonGrid, SpecialGrid } from "./enums";

export type GridLayout = CommonGrid | SpecialGrid;

export interface DataValue {
  value: number;
  text: string;
}

export interface DataCell {
  cell: number;
  id: number;
}
