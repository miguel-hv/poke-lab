import { Component, inject } from '@angular/core';
import { DialogInfoComponent } from '../../components/core/dialogs/dialog-info/dialog-info.component';
import { Dialog, DialogModule } from '@angular/cdk/dialog';

@Component({
  selector: 'app-select-pokemon-page',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './select-pokemon-page.component.html',
  styleUrl: './select-pokemon-page.component.scss'
})
export class SelectPokemonPageComponent {

  dialog = inject(Dialog);

  openDialog() {
    this.dialog.open(DialogInfoComponent, {
      minWidth: '100vw',
      data: {
        title: 'título',
        description: 'descripción'
      },
    });
  }
}
