import { Component, inject } from '@angular/core';
import { UrlRoutes } from '../../shared/enumerators/urlRoutes.enum';
import { Router } from '@angular/router';

const routesenum = UrlRoutes;

@Component({
  selector: 'app-welcome-page',
  standalone: true,
  imports: [],
  templateUrl: './welcome-page.component.html',
  styleUrl: './welcome-page.component.scss'
})

export class WelcomePageComponent {

  private router = inject(Router);
  
  onActionButton() {
    this.router.navigate([routesenum.home]);
  }
}
