export interface Pokemon {
  id: number;
  name: string;
  types: [];
  stats: [];
  abilities: [];
  url: string;
  sprites: [];
  results: any;

}

export class Species {
  id: number;
  name: string;
  evolutionChain: string;
  varieties: any[];

  constructor () {
    this.id = 0;
    this.name = "";
    this.evolutionChain = "";
    this.varieties = [];
  }
}
