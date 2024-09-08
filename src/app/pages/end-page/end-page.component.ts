import { Component, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-end-page',
  standalone: true,
  imports: [],
  templateUrl: './end-page.component.html',
  styleUrl: './end-page.component.scss'
})
export class EndPageComponent {

  auth = inject(AuthService);
  router = inject(Router);

  onStartAgain() {
    this.auth.logout();
  }
}
