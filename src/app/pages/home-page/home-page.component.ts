import { Component, inject } from '@angular/core';
import {  Router, RouterModule } from '@angular/router';
import { CdkMenu, CdkMenuItem} from '@angular/cdk/menu';
import { UrlRoutes, UrlRoutesRoot } from '../../shared/enumerators/urlRoutes.enum';
import { PokemonType } from '../../shared/enumerators/pokemonType.enum';
import { UserStore } from '../../shared/stores/userStore';

const urlRoutesRoot = UrlRoutesRoot;
const urlRoutes = UrlRoutes;

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CdkMenu, CdkMenuItem],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public store = inject(UserStore);
  private router = inject(Router);
  public pokemonType = PokemonType;

  //urls
  public urlSelectPokemon = urlRoutesRoot.selectPokemonRoot;
  public urlSecretFire =  urlRoutesRoot.secretFireRoot;
  public urlSecretLeaf = urlRoutesRoot.secretLeafRoot;
  public urlSecretWater = urlRoutesRoot.secretWaterRoot;

  constructor() { 
    if (this.store.secrets()?.length === 3) 
      this.router.navigate([urlRoutes.end]);
  }

}
