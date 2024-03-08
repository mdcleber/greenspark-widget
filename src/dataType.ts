import { ColorsType } from './colorsHelper';

export enum ActionType {
  Collects = "collects",
  Plants = "plants",
  Offsets = "offsets",
}

export enum MaterialType {
  Carbon = "carbon",
  PlasticBottles = "plastic bottles",
  Trees = "trees",
}

export interface WidgetModel {
  id: number;
  type: MaterialType;
  amount: number;
  action: ActionType;
  active: boolean;
  linked: boolean;
  selectedColor: ColorsType;
}
