import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoFogueteComponent } from './criacao-foguete.component';

describe('CriacaoFogueteComponent', () => {
  let component: CriacaoFogueteComponent;
  let fixture: ComponentFixture<CriacaoFogueteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriacaoFogueteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoFogueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
