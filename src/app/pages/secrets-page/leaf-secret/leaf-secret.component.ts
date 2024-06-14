import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';

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
  
  constructor() { 
    if (this.auth.pokemon()?.type === this.LEAF && !this.auth.secrets().includes(this.LEAF)) 
      this.auth.addSecret(this.LEAF);
  }

}
