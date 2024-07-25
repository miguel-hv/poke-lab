import { Component, inject } from '@angular/core';
import { DialogInfoComponent } from '../../components/core/dialogs/dialog-info/dialog-info.component';
import { Dialog } from '@angular/cdk/dialog';
import { PokemonList } from '../../shared/enumerators/pokemon.enum';
import { Pokemon } from '../../models/Pokemon.model';
import { AuthService } from '../../shared/services/auth.service';
import { Location } from '@angular/common';
import { OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DialogContent } from '../../models/DialogText.model';
import { ResizeService } from '../../shared/services/resize.service';

@Component({
  selector: 'app-select-pokemon-page',
  standalone: true,
  imports: [],
  templateUrl: './select-pokemon-page.component.html',
  styleUrl: './select-pokemon-page.component.scss'
})
export class SelectPokemonPageComponent {

  public auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);
  private resizeService = inject(ResizeService);

  pokemonList = PokemonList;

  dialogSettings: DialogContent = {    
    description: '',
    ok: '¡Elegir!',
    no: 'Mejor no',
  }

  constructor(private overlayPositionBuilder: OverlayPositionBuilder) {
  }

  onSelectPokemon(pokemon: Pokemon) {
    console.log(pokemon);
    console.log(this.auth.pokemon()?.name);
    if(pokemon.name === this.auth.pokemon()?.name) {
      this.dialogSettings = {
        description: '¡Ya tienes elegido ese pokemon!',
        ok: '',
        no: 'Entendido',
      }
    } else {
      if (pokemon.name === 'charmander') {
        this.dialogSettings = {
          description: '¿Quieres elegir a Charmander, el pokémon tipo fuego?',
          ok: '¡Elegir!',
          no: 'Mejor no',
        }
      }
      if (pokemon.name === 'squirtle') {
        this.dialogSettings = {
          description: '¿Quieres elegir a Squirtle, el pokémon tipo agua?',
          ok: '¡Elegir!',
          no: 'Mejor no',
        }
      }
      if (pokemon.name === 'bulbasaur') {
        this.dialogSettings = {
          description: '¿Quieres elegir a Bulbasaur, el pokémon tipo planta?',
          ok: '¡Elegir!',
          no: 'Mejor no',
        }
      }
    }

    this.dialog.open(DialogInfoComponent, {
      maxWidth: this.resizeService.width$(),
      minWidth: this.resizeService.width$(),
      data: this.dialogSettings,
      positionStrategy: this.overlayPositionBuilder.global().bottom('0').centerHorizontally()
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
