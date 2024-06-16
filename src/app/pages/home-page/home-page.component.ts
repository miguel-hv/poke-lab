import { Component, ElementRef, NgZone, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit, OnDestroy {

  public auth = inject(AuthService);
  screenWidth = (screen.width * 1.777).toString()+"px";
  widthObserver: ResizeObserver = {} as ResizeObserver;

  @ViewChild('containerWidth', { static: true }) containerWidth: ElementRef = {} as ElementRef;

  constructor(
    private zone: NgZone
  ) { 
    if (this.auth.secrets().length === 3) 
      console.log("secretos conseguidos");
  }

  ngOnInit() {
    this.widthObserver = new ResizeObserver(entries => {
      this.zone.run(() => {
        const screenWidth = entries[0].contentRect.width;
        this.screenWidth = (screenWidth * 1.777).toString()+"px";
      });
    });

    this.widthObserver.observe(this.containerWidth.nativeElement);
  }

  ngOnDestroy() {
    this.widthObserver.unobserve(this.containerWidth.nativeElement);
  }


  onLogout() {
    this.auth.logout();
  }
}
