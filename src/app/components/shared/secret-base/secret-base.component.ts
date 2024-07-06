import { Component, inject, input } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Dialog } from '@angular/cdk/dialog';
import { ResizeService } from '../../../shared/services/resize.service';
import { OverlayPositionBuilder } from '@angular/cdk/overlay';
import { DialogInfoComponent } from '../../core/dialogs/dialog-info/dialog-info.component';
import { DialogContent } from '../../../models/DialogText.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-secret-base',
  standalone: true,
  imports: [],
  templateUrl: './secret-base.component.html',
  styleUrl: './secret-base.component.scss'
})
export class SecretBaseComponent {

  private auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);
  private resizeService = inject(ResizeService);

  pokemonTypes = {
    leaf: 'leaf',
    fire: 'fire',
    water: 'water'
  }

  // dialog variables
  dialogSettings = <DialogContent> {
    description: '',
    ok: 'OK',
    no: ''
  };

  //template variables 
  texts = {
    leaf: '¡Has conseguido el secreto tipo planta! Venusaur es el pokémón tipo planta más poderoso de la primera edición ;)',
    fire: '¡Has conseguido el secreto tipo fuego! Arcanine es el pokémón tipo fuego más poderoso de la primera edición ;)',
    water: '¡Has conseguido el secreto tipo agua! Squirtle es el pokémón tipo agua más poderoso de la primera edición ;)',
    alreadyVisited: 'Ya tienes este secreto',
    advice: 'Consigue el resto de secretos para completar tu colección',
  }
  imagePathDisplay!: string;
  imagePaths = {
    leaf: "./../../../../assets/images/pokemon/bulbasaur.png",
    fire: "./../../../../assets/images/pokemon/charmander.png",
    water: "./../../../../assets/images/pokemon/squirtle.png",
  }
  
  constructor(private overlayPositionBuilder: OverlayPositionBuilder) { 
    this.checkSecret(this.auth.pokemon()?.type, this.auth.secrets());
    this.openDialogOak();
  }
  
  checkSecret(type:string|undefined, secrets: string[]) {
    if (type === this.pokemonTypes.leaf) {
      if (!secrets.includes(this.pokemonTypes.leaf)) {
        this.auth.addSecret(this.pokemonTypes.leaf);
        this.dialogSettings.description = this.texts.leaf;
      } else {
        this.dialogSettings.description = this.texts.alreadyVisited;
      }
      this.imagePathDisplay = this.imagePaths.leaf;
    } 
    else if (type === this.pokemonTypes.fire) {
      if (!secrets.includes(this.pokemonTypes.fire)) {
        this.auth.addSecret(this.pokemonTypes.fire);
        this.dialogSettings.description = this.texts.fire;
      } else {
        this.dialogSettings.description = this.texts.alreadyVisited;
      }
      this.imagePathDisplay = this.imagePaths.fire;
    } 
    else if (type === this.pokemonTypes.water && !secrets.includes(this.pokemonTypes.water)) {
      if (!secrets.includes(this.pokemonTypes.water)) {
        this.auth.addSecret(this.pokemonTypes.water);
        this.dialogSettings.description = this.texts.water;
      } else {
        this.dialogSettings.description = this.texts.alreadyVisited;
      }
      this.imagePathDisplay = this.imagePaths.water;
    } 

  }

  openDialogOak() {
    this.dialog.open(DialogInfoComponent, {
      maxWidth: this.resizeService.width$(),
      minWidth: this.resizeService.width$(),
      data: this.dialogSettings,
      positionStrategy: this.overlayPositionBuilder.global().bottom('0').centerHorizontally()
    }).closed.subscribe((res) => {
      if (res === 'OK') {
        this.navigateBack();
      } 
    });
  }

  navigateBack() {
    this.location.back();
  }

}
