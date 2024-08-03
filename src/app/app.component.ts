import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ResizeService } from './shared/services/resize.service';
import { AuthService } from './shared/services/auth.service';
import { UrlRoutes } from './shared/enumerators/urlRoutes.enum';

const urlRoutes = UrlRoutes;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {

  @ViewChild('screenContainer', { static: true }) screenContainer = {} as ElementRef;
  public resizeService = inject(ResizeService);
  public router = inject(Router);
  public auth = inject(AuthService);
  
  title = 'poke-app';

  constructor() { 
    if (!this.auth.pokemon()) 
      this.router.navigate([urlRoutes.welcome]);

    if (this.auth.secrets()?.length === 3) 
      this.router.navigate([urlRoutes.end]);
  }

  ngAfterViewInit() {
    this.resizeService.updateWidth(this.screenContainer.nativeElement.offsetWidth);
  }
}
