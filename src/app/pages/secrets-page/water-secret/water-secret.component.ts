import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { PokemonType } from '../../../shared/enumerators/pokemonType.enum';
import { SecretBaseComponent } from '../../../components/shared/secret-base/secret-base.component';

@Component({
  selector: 'app-water-secret',
  standalone: true,
  imports: [SecretBaseComponent],
  templateUrl: './water-secret.component.html',
  styleUrl: './water-secret.component.scss'
})
export class WaterSecretComponent {

  private auth = inject(AuthService);
  private pokemonTypes = PokemonType;
  
  textSecret = '';
  textSecretType = 'El pokémon tipo agua más poderoso de los 151 originales es Lapras.'
  textNewSecret = '¡Has conseguido el secreto tipo agua!';
  imagePath = "./../../../../assets/images/pokemon/squirtle.png";

  constructor() {
    if (!this.auth.secrets().includes(this.pokemonTypes.water)) {
      this.auth.addSecret(this.pokemonTypes.water);
      this.textSecret = this.textNewSecret;
    } 
  }

}
