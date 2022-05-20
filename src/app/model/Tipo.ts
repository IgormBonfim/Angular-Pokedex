export class Tipo {
  id: number;
  name: string;
  doubleDamageFrom: Type[];
  doubleDamageTo: Type[];
  halfDamageFrom: Type[];
  halfDamageTo: Type[];
  noDamageFrom: Type[];
  noDamageTo: Type[];

  constructor () {
    this.id = 0;
    this.name = "";
    this.doubleDamageFrom = [];
    this.doubleDamageTo = [];
    this.halfDamageFrom = [];
    this.halfDamageTo = [];
    this.noDamageFrom = [];
    this.noDamageTo = [];
  }
}

class Type {
  name: string;
  url: string;

  constructor () {
    this.name = "";
    this.url = "";
  }
}
