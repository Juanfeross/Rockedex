export interface IPokemon {
  id: number;
  name: string;
  url: string;
  height: number;
  weight: number;
  sprites: IPkmSprites;
  types: IPkmType[];
}

export interface IPkmSprites {
  front_default: string;
  other: IPkmArtwork;
}

export interface IPkmArtwork {
  "official-artwork": IArtFront;
}

export interface IArtFront {
  front_default: string;
}

export interface IPkmType {
  slot: number;
  type: IType;
}

export interface IType {
  name: string;
  url: string;
}
