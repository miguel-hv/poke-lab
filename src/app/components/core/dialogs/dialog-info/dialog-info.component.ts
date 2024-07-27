import { DEFAULT_DIALOG_CONFIG, DIALOG_DATA, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { CdkPortal, ComponentPortal } from '@angular/cdk/portal';
import { Component, Inject, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss',
})
export class DialogInfoComponent {

  private OK = 'OK';
  private NO = 'NO';

    positionStrategyDef = this.overlayPosBuilder.global().bottom('0').centerHorizontally();

  constructor(
    @Inject(DIALOG_DATA) public data: {title: string, description: string, ok: string, no?: string},
    public dialogRef: DialogRef<string>,
    private readonly overlayPosBuilder: OverlayPositionBuilder,
    private config: DialogConfig,
  ) {
    //TODO: ¿como añadir positionStrategyDef que está arriba?
    this.config.positionStrategy?.attach(this.dialogRef.overlayRef);
  }



  accept() {
    this.dialogRef.close(this.OK);
  }

  cancel() {
    this.dialogRef.close(this.NO);
  }
}

