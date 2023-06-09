import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGridComponent } from './hero-grid.component';

describe('HeroGridComponent', () => {
  let component: HeroGridComponent;
  let fixture: ComponentFixture<HeroGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
