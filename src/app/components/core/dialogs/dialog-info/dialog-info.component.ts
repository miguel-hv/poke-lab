import { DIALOG_DATA, DialogModule, DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss',
})
export class DialogInfoComponent {

  private OK = 'OK';
  private NO = 'NO';

  constructor(
    @Inject(DIALOG_DATA) public data: {title: string, description: string, ok: string, no?: string},
    public dialogRef: DialogRef<string>
  ) {}

  accept() {
    this.dialogRef.close(this.OK);
  }

  cancel() {
    this.dialogRef.close(this.NO);
  }
}

