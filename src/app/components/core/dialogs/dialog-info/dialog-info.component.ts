import { DIALOG_DATA, Dialog, DialogModule } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  imports: [DialogModule],
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss'
})
export class DialogInfoComponent {
  constructor(public dialog: Dialog) {}

  openDialog() {
    this.dialog.open(CdkDialogDataExampleDialog, {
      minWidth: '300px',
      data: {
        animal: 'panda',
      },
    });
  }

}

@Component({
  selector: 'cdk-dialog-data-example-dialog',
  templateUrl: 'cdk-dialog-data-example-dialog.html',
  styleUrl: './cdk-dialog-data-example-dialog.scss',
  standalone: true,
})
export class CdkDialogDataExampleDialog {
  constructor(@Inject(DIALOG_DATA) public data: DialogData) {}
}


/**  Copyright 2024 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
