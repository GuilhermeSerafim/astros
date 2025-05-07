import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAsteroidComponent } from './class-asteroid.component';

describe('ClassAsteroidComponent', () => {
  let component: ClassAsteroidComponent;
  let fixture: ComponentFixture<ClassAsteroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassAsteroidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAsteroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
