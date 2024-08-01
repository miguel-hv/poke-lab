import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import {  RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import { UrlRoutesRoot } from '../../shared/enumerators/urlRoutes.enum';
import { PokemonType } from '../../shared/enumerators/pokemonType.enum';

const urlRoutesRoot = UrlRoutesRoot;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CdkMenu, CdkMenuItem],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public auth = inject(AuthService);
  public pokemonType = PokemonType;

  //urls
  public urlSelectPokemon = urlRoutesRoot.selectPokemonRoot;
  public urlSecretFire =  urlRoutesRoot.secretFireRoot;
  public urlSecretLeaf = urlRoutesRoot.secretLeafRoot;
  public urlSecretWater = urlRoutesRoot.secretWaterRoot;

}
