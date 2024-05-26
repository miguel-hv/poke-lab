import { DIALOG_DATA, DialogModule } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-dialog-info',
  standalone: true,
  templateUrl: './dialog-info.component.html',
  styleUrl: './dialog-info.component.scss',
})
export class DialogInfoComponent {
  constructor(@Inject(DIALOG_DATA) public data: {title: string, description: string}) {}
}

