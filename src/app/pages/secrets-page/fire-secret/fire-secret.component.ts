import { Component } from '@angular/core';
import { SecretBaseComponent } from '../../../components/shared/secret-base/secret-base.component';

@Component({
  selector: 'app-fire-secret',
  standalone: true,
  imports: [SecretBaseComponent],
  templateUrl: './fire-secret.component.html',
  styleUrl: './fire-secret.component.scss'
})
export class FireSecretComponent {

}
