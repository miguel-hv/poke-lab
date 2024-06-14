import { Component, inject } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon.model';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  selectedPokemon: Pokemon | null;
  private auth = inject(AuthService);

  constructor() {
    this.selectedPokemon = this.auth.pokemon();
  }
}
