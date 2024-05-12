import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FireSecretComponent } from './fire-secret.component';

describe('FireSecretComponent', () => {
  let component: FireSecretComponent;
  let fixture: ComponentFixture<FireSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FireSecretComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FireSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
