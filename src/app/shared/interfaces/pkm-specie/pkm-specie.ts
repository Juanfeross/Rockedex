export interface IPkmSpecie {
  id: number;
  name: string;
  flavor_text_entries: IFlavorText[];
}

export interface IFlavorText {
  flavor_text: string;
  language: ILanguage;
}

export interface ILanguage {
  name: string;
  url: string;
}
