import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  @Input()
  pokemon: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
