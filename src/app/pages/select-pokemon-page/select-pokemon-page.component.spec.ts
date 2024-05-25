import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPokemonPageComponent } from './select-pokemon-page.component';

describe('SelectPokemonPageComponent', () => {
  let component: SelectPokemonPageComponent;
  let fixture: ComponentFixture<SelectPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectPokemonPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
