import { HttpClientModule } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/core/footer/footer.component';
import { DialogInfoComponent } from './components/core/dialogs/dialog-info/dialog-info.component';
import { HeaderComponent } from './components/core/header/header.component';
import { ResizeService } from './shared/services/resize.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, FooterComponent, DialogInfoComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, AfterViewInit {

  @ViewChild('screenContainer', { static: true }) screenContainer = {} as ElementRef;
  resizeService = inject(ResizeService);
  title = 'poke-app';

  ngOnInit() {
    this.resizeService.width$.subscribe(width => {
      width = 200;
    });
  }

  ngAfterViewInit() {
    console.log(this.screenContainer.nativeElement.offsetWidth);

    // const element = this.elementRef.nativeElement;
    const resizeObserver = new ResizeObserver(entries => {
      const width = entries[0].contentRect.width;
      this.resizeService.updateWidth(width);
    });
    // resizeObserver.observe(element);
  }
}
