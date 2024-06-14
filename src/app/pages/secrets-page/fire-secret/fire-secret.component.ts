import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-fire-secret',
  standalone: true,
  imports: [],
  templateUrl: './fire-secret.component.html',
  styleUrl: './fire-secret.component.scss'
})
export class FireSecretComponent {

  private FIRE = 'fire';
  private auth = inject(AuthService);
  
  constructor() { 
    if (this.auth.pokemon()?.type === this.FIRE && !this.auth.secrets().includes(this.FIRE)) 
      this.auth.addSecret(this.FIRE);
  }

}
