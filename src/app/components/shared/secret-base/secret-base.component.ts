import { Component, inject, input, OnInit } from '@angular/core';
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
export class SecretBaseComponent implements OnInit {

  textSecret = input('tes');
  public imagePath = input('tes');
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
    alreadyVisited: 'Ya tienes este secreto',
    advice: 'Consigue el resto de secretos para completar tu colección',
  }
  
  constructor(private overlayPositionBuilder: OverlayPositionBuilder) { 
    this.openDialogOak();
  }

  ngOnInit(): void {
    this.dialogSettings.description = this.textSecret() ? this.textSecret() : this.texts.alreadyVisited;
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
