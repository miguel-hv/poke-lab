import { Component, Signal, inject } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedPokemon: Signal<Pokemon | null>;
  private auth = inject(AuthService);

  constructor() {
    // this.auth.isAuthenticated().subscribe((pokemon) => {
    //   this.selectedPokemon = pokemon
    // })
    this.selectedPokemon = this.auth.pokemon;
    // this.auth.$pokemon.subscribe((pokemon) => {
    //   this.selectedPokemon = pokemon;
    // });
  }
}
