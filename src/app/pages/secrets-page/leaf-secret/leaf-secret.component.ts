import { Component, inject } from '@angular/core';
import { SecretBaseComponent } from '../../../components/shared/secret-base/secret-base.component';
import { AuthService } from '../../../shared/services/auth.service';
import { PokemonType } from '../../../shared/enumerators/pokemonType.enum';

@Component({
  selector: 'app-leaf-secret',
  standalone: true,
  imports: [SecretBaseComponent],
  templateUrl: './leaf-secret.component.html',
  styleUrl: './leaf-secret.component.scss'
})
export class LeafSecretComponent {

  private auth = inject(AuthService);
  private pokemonTypes = PokemonType;

  textSecret = '';
  textSecretType = 'El pokémon tipo planta más poderoso de los 151 originales es Venusaur.'
  textNewSecret = '¡Has conseguido el secreto tipo planta!';
  imagePath = "./../../../../assets/images/pokemon/bulbasaur.png";

  constructor() {
    if (!this.auth.secrets()?.includes(this.pokemonTypes.leaf)) {
      this.auth.addSecret(this.pokemonTypes.leaf);
      this.textSecret = this.textNewSecret;
    } 
  }
}
