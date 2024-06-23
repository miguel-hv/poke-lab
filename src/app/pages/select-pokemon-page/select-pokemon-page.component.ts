import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
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
export class SelectPokemonPageComponent implements AfterViewInit {

  public auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);

  pokemonList = PokemonList;

  @ViewChild('screenContainer', { static: true }) screenContainer = {} as ElementRef;

  dialogSettings = {
    minWidth: '',
    title: 'título', 
    description: 'descripción'
  };


  ngAfterViewInit() {
    console.log(this.screenContainer);
    this.dialogSettings.minWidth = this.screenContainer.nativeElement.offsetWidth;
    console.log(this.dialogSettings.minWidth);
  }
  onSelectPokemon(pokemon: Pokemon) {
    this.dialog.open(DialogInfoComponent, {
      minWidth: this.dialogSettings.minWidth,
      data: {
        title: this.dialogSettings.title,
        description: this.dialogSettings.description
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
