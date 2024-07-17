import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import {  UrlRoutesRoot } from '../../shared/enumerators/urlRoutes.enum';
import { PokemonType } from '../../shared/enumerators/pokemonType.enum';

const urlRoutes = UrlRoutesRoot;

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
  public urlSelectPokemon = urlRoutes.selectPokemonRoot;
  public urlSecretFire =  urlRoutes.secretFireRoot;
  public urlSecretLeaf = urlRoutes.secretLeafRoot;
  public urlSecretWater = urlRoutes.secretWaterRoot;

  constructor() { 
    if (this.auth.secrets()?.length === 3) 
      console.log("secretos conseguidos");
  }


}
