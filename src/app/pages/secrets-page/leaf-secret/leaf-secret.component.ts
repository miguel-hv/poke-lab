import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { DialogInfoComponent } from '../../../components/core/dialogs/dialog-info/dialog-info.component';
import { Dialog } from '@angular/cdk/dialog';
import { DialogContent } from '../../../models/DialogText.model';
import { OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Location } from '@angular/common';

@Component({
  selector: 'app-leaf-secret',
  standalone: true,
  imports: [],
  templateUrl: './leaf-secret.component.html',
  styleUrl: './leaf-secret.component.scss'
})
export class LeafSecretComponent {

  private LEAF = 'leaf';
  private auth = inject(AuthService);
  private dialog = inject(Dialog);
  private location = inject(Location);

  dialogSettings = <DialogContent> {
    description: '¡Has conseguido el secreto tipo planta! Venusaur es el pokémón tipo planta más poderoso de la primera edición ;) Consigue el resto de secretos para completar tu colección.',
    ok: 'OK',
    no: ''
  };
  
  constructor(private overlayPositionBuilder: OverlayPositionBuilder) { 
    if (this.auth.pokemon()?.type === this.LEAF && !this.auth.secrets().includes(this.LEAF)) 
      this.auth.addSecret(this.LEAF);

    this.dialog.open(DialogInfoComponent, {
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
