import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleStarComponent } from './style-star.component';

describe('StyleStarComponent', () => {
  let component: StyleStarComponent;
  let fixture: ComponentFixture<StyleStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StyleStarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StyleStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
