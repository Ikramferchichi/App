import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutHeroComponent } from './ajout-hero.component';

describe('AjoutHeroComponent', () => {
  let component: AjoutHeroComponent;
  let fixture: ComponentFixture<AjoutHeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AjoutHeroComponent]
    });
    fixture = TestBed.createComponent(AjoutHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
