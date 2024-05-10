import { Component, computed, effect, inject } from '@angular/core';
import { Pokemon } from '../../models/Pokemon.model';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public auth = inject(AuthService);
  
  // user = computed(() => this.auth.currentUser()); //DUDA: ¿por qué no se actualiza currentUser() en template directamente si es un observable?

  pokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'grass' },
    { name: 'charmander', type: 'fire' },
    { name: 'squirtle', type: 'water' }
  ];

  constructor() {
    effect(() => {
      if (this.auth.currentUser()) {
        console.log(this.auth.currentUser());
      }
    })

  }
  onSelectPokemon(pokemon: Pokemon) {
    this.auth.updateKeyType(pokemon.type);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

  onLogout() {
    this.auth.logout();
  }

}
