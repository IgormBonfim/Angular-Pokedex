import { LeadingZeros } from './LeadingZeros';
export class Pokemon extends LeadingZeros {
  public image: string ;
  public number: number;
  public name: string;

  constructor(numero: number, nome: string) {
    super();
    this.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${super.leadingZeros(numero)}.png`;
    this.number = numero;
    this.name = nome;
  }
}


