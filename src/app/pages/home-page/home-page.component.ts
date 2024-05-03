import { Component, effect, inject } from '@angular/core';
import { Pokemon } from '../../models/Pokemon.model';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  providers: [AuthService],
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  pokemonList: Pokemon[] = [
    { name: 'bulbasaur', type: 'grass' },
    { name: 'charmander', type: 'fire' },
    { name: 'squirtle', type: 'water' }
  ];

  private auth = inject(AuthService);

  constructor() {
    console.log(this.auth.currentUser());

    //TODO: delete if not needed
    effect(() => {
      if (this.auth.currentUser()) {
        console.log(this.auth.currentUser());
      }
    });
  }

  onSelectPokemon(pokemon: Pokemon) {
    this.auth.updateKeyType(pokemon.type);
    console.log(pokemon);
  }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
  }

}
