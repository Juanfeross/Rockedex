export interface IPokemonResults<T> {
  count: number;
  next: string;
  previous?: string;
  results: T;
}
