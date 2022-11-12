export interface IPokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  order: number;
  weight: number;
  sprites: IPkmSprites;
  types: IPkmType[];
}

export interface IPkmSprites {
  front_default: string;
}

export interface IPkmType {
  slot: number;
  type: IType[];
}

export interface IType {
  name: string;
  url: string;
}
