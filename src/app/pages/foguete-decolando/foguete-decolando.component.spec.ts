import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FogueteDecolandoComponent } from './foguete-decolando.component';

describe('FogueteDecolandoComponent', () => {
  let component: FogueteDecolandoComponent;
  let fixture: ComponentFixture<FogueteDecolandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FogueteDecolandoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FogueteDecolandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
