import { Component, Signal, inject } from '@angular/core';
import { Pokemon } from '../../../models/Pokemon.model';
import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../models/User.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  selectedPokemon: Signal<Pokemon | null>;
  userData: Signal<User | null>;
  secretsList: Signal<string[] | null>;

  private auth = inject(AuthService);

  imageTitleSrc = "./../../../../assets/images/backgrounds/logo.png";

  constructor() {
    this.selectedPokemon = this.auth.pokemon;
    this.userData = this.auth.currentUser;
    this.secretsList = this.auth.secrets;
  }

  onLogout() {
    this.auth.logout();
  }
}
