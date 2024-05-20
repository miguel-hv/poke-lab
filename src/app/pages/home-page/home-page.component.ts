import { Component, inject } from '@angular/core';
import { Pokemon } from '../../models/Pokemon.model';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { PokemonList } from '../../shared/enumerators/pokemon.enum';
import { DialogInfoComponent } from '../../components/core/dialogs/dialog-info/dialog-info.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public auth = inject(AuthService);

  constructor() { 
    if (this.auth.secrets().length === 3) 
      console.log("secretos conseguidos");
  }

  pokemonList = PokemonList;

  onSelectPokemon(pokemon: Pokemon) {
    this.auth.updateKeyType(pokemon.type);
  }

  onLogout() {
    this.auth.logout();
  }
}
