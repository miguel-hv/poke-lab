import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/core/footer/footer.component';
import { HeaderComponent } from './components/core/header/header.component';
import { ResizeService } from './shared/services/resize.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{

  @ViewChild('screenContainer', { static: true }) screenContainer = {} as ElementRef;
  resizeService = inject(ResizeService);
  
  title = 'poke-app';

  ngAfterViewInit() {
    console.log(this.screenContainer.nativeElement.offsetWidth);
    this.resizeService.updateWidth(this.screenContainer.nativeElement.offsetWidth);
  }
}
