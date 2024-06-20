import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../components/core/header/header.component';
import {CdkMenu, CdkMenuItem} from '@angular/cdk/menu';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, CdkMenu, CdkMenuItem],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  public auth = inject(AuthService);

  constructor() { 
    if (this.auth.secrets().length === 3) 
      console.log("secretos conseguidos");
  }


  onLogout() {
    this.auth.logout();
  }
}
