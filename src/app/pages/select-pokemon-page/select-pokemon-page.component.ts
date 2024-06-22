import { Component, OnInit, inject } from '@angular/core';
import { DialogInfoComponent } from '../../components/core/dialogs/dialog-info/dialog-info.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
import { PokemonList } from '../../shared/enumerators/pokemon.enum';
import { Pokemon } from '../../models/Pokemon.model';
import { AuthService } from '../../shared/services/auth.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-select-pokemon-page',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './select-pokemon-page.component.html',
  styleUrl: './select-pokemon-page.component.scss'
})
export class SelectPokemonPageComponent {

  public auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);

  pokemonList = PokemonList;

  onSelectPokemon(pokemon: Pokemon) {
    this.dialog.open(DialogInfoComponent, {
      minWidth: '100vw',
      data: {
        title: 'título',
        description: 'descripción'
      },
    }).closed.subscribe((res) => {
      if (res === 'OK') {
        this.auth.updatePokemon(pokemon);
        this.navigateBack();
      } 
    });
  }

  navigateBack() {
    this.location.back();
  }

}
