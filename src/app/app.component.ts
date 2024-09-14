import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, ViewChild, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ResizeService } from './shared/services/resize.service';
import { AuthService } from './shared/services/auth.service';
import { UrlRoutes } from './shared/enumerators/urlRoutes.enum';
import { UserStore } from './shared/stores/userStore';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './shared/stores/user.reducer';

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
  readonly store = inject(UserStore);

  
  title = 'poke-app';

  constructor() { 
    if (!this.store.pokemon()) 
      this.router.navigate([urlRoutes.welcome]);

    if (this.store.secrets()?.length === 3) 
      this.router.navigate([urlRoutes.end]);
  }

  ngAfterViewInit() {
    this.resizeService.updateWidth(this.screenContainer.nativeElement.offsetWidth);
  }
}
