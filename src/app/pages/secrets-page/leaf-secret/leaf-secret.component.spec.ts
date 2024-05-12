import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafSecretComponent } from './leaf-secret.component';

describe('LeafSecretComponent', () => {
  let component: LeafSecretComponent;
  let fixture: ComponentFixture<LeafSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeafSecretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeafSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
