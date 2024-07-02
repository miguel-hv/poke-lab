import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { DialogInfoComponent } from '../../components/core/dialogs/dialog-info/dialog-info.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';
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
  imports: [DialogModule],
  templateUrl: './select-pokemon-page.component.html',
  styleUrl: './select-pokemon-page.component.scss'
})
export class SelectPokemonPageComponent implements AfterViewInit {

  public auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);
  private resizeService = inject(ResizeService);

  pokemonList = PokemonList;

  @ViewChild('screenContainer', { static: true }) screenContainer = {} as ElementRef;

  dialogSettings: DialogContent = {    
    minWidth: '',
    text: {
      description: '',
      ok: '¡Elegir!',
      no: 'Mejor no',
    }
  }

  constructor(private overlayPositionBuilder: OverlayPositionBuilder) {
  //   this.resizeService.width$.subscribe(width => {
  //     // Handle the width update here
  //     this.dialogSettings.minWidth = `${width}px`;
  //  });
  }


  ngAfterViewInit() {
    // this.dialogSettings.minWidth = this.screenContainer.nativeElement.offsetWidth;
  }
  onSelectPokemon(pokemon: Pokemon) {

    if (pokemon.name === 'charmander') {
      this.dialogSettings.text.description = '¿Quieres elegir a Charmander, el pokémon tipo fuego?';
    }
    if (pokemon.name === 'squirtle') {
      this.dialogSettings.text.description = '¿Quieres elegir a Squirtle, el pokémon tipo agua?';
    }
    if (pokemon.name === 'bulbasaur') {
      this.dialogSettings.text.description = '¿Quieres elegir a Bulbasaur,el pokémon tipo planta?';
    }

    this.dialog.open(DialogInfoComponent, {
      // minWidth: this.dialogSettings.minWidth,
      data: this.dialogSettings.text,
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
