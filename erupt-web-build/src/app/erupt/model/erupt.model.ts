import {Edit, EruptFieldModel} from "./erupt-field.model";
import {RgbColor} from "./erupt.enum";
/**
 * Created by liyuepeng on 10/16/18.
 */
export interface EruptModel {
  eruptFieldModels: Array<EruptFieldModel>;
  eruptJson: Erupt;
  eruptName: string;
  primaryKeyCol: string;
}

export interface Erupt {
  name: string;
  power: Power;
  cards: Array<Card>;
  rowOperation: Array<RowOperation>;
}

interface RowOperation {
  icon: string;

  title: string;

  multi: boolean;

  edits: Array<Edit>;
}

interface Power {
  add: boolean;
  del: boolean;
  edit: boolean;
  query: boolean;
  export: boolean;
  importable: boolean;
}

interface Card {
  icon: string;
  value: string;
  desc: string;
  color: RgbColor;
}
