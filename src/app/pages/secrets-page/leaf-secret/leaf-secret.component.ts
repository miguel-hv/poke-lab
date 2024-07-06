import { Component } from '@angular/core';
import { SecretBaseComponent } from '../../../components/shared/secret-base/secret-base.component';

@Component({
  selector: 'app-leaf-secret',
  standalone: true,
  imports: [SecretBaseComponent],
  templateUrl: './leaf-secret.component.html',
  styleUrl: './leaf-secret.component.scss'
})
export class LeafSecretComponent {

}
