import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/core/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-poke-page',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './poke-page.component.html',
  styleUrl: './poke-page.component.scss'
})
export class PokePageComponent {

}
