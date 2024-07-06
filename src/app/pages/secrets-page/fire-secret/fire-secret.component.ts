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
  textNewSecret = '¡Has conseguido el secreto tipo fuego! Arcanine es el pokémón tipo fuego más poderoso de la primera edición ;)';
  imagePath = './../../../../assets/images/pokemon/charmander.png';

  constructor() {
    if (!this.auth.secrets().includes(this.pokemonTypes.fire)) {
      this.auth.addSecret(this.pokemonTypes.fire);
      this.textSecret = this.textNewSecret;
    } 
  }

}
