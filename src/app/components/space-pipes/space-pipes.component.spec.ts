import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacePipesComponent } from './space-pipes.component';

describe('SpacePipesComponent', () => {
  let component: SpacePipesComponent;
  let fixture: ComponentFixture<SpacePipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpacePipesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpacePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
