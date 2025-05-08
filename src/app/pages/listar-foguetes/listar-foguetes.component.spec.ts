import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFoguetesComponent } from './listar-foguetes.component';

describe('ListarFoguetesComponent', () => {
  let component: ListarFoguetesComponent;
  let fixture: ComponentFixture<ListarFoguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarFoguetesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarFoguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
