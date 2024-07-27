import { Component, inject } from '@angular/core';
import { SecretBaseComponent } from '../../../components/shared/secret-base/secret-base.component';
import { AuthService } from '../../../shared/services/auth.service';
import { PokemonType } from '../../../shared/enumerators/pokemonType.enum';

@Component({
  selector: 'app-fire-secret',
  standalone: true,
  imports: [SecretBaseComponent],
  templateUrl: './fire-secret.component.html',
  styleUrl: './fire-secret.component.scss'
})
export class FireSecretComponent {

  private auth = inject(AuthService);
  private pokemonTypes = PokemonType;
  
  textSecret = '';
  textSecretType = 'El pokémon tipo fuego más poderoso de los 151 originales es Arcanine.'
  textNewSecret = '¡Has conseguido el secreto tipo fuego!';
  imagePath = './../../../../assets/images/pokemon/charmander.png';

  constructor() {
    if (!this.auth.secrets()?.includes(this.pokemonTypes.fire)) {
      this.auth.addSecret(this.pokemonTypes.fire);
      this.textSecret = this.textNewSecret;
    } 
  }

}
