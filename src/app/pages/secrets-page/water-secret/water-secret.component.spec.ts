import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterSecretComponent } from './water-secret.component';

describe('WaterSecretComponent', () => {
  let component: WaterSecretComponent;
  let fixture: ComponentFixture<WaterSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WaterSecretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WaterSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
