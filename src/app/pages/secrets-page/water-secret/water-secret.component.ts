import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-water-secret',
  standalone: true,
  imports: [],
  templateUrl: './water-secret.component.html',
  styleUrl: './water-secret.component.scss'
})
export class WaterSecretComponent {

  private WATER = 'water';
  private auth = inject(AuthService);
  
  constructor() { 
    console.log(this.auth.pokemon()?.type);
    console.log(this.auth.secrets());
    if (this.auth.pokemon()?.type === this.WATER && !this.auth.secrets().includes(this.WATER))
      this.auth.addSecret(this.WATER);
  }

}
