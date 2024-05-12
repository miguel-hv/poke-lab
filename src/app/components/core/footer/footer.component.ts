import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  menuItems = [
    {
      name: 'Home',
      path: '/home'
    },
    {
      name: 'Login',
      path: '/login'
    },
    {
      name: 'Register',
      path: '/register'
    },
    {
      name: 'Secreto de fuego',
      path: '/secrets/fire'
    },
    {
      name: 'Secreto de agua',
      path: '/secrets/water'
    },
    {
      name: 'Secreto de hierba',
      path: '/secrets/leaf'
    }
  ]

}
