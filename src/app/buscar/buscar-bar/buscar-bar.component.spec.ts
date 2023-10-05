import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarBarComponent } from './buscar-bar.component';

describe('BuscarBarComponent', () => {
  let component: BuscarBarComponent;
  let fixture: ComponentFixture<BuscarBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscarBarComponent]
    });
    fixture = TestBed.createComponent(BuscarBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
