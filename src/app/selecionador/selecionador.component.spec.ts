import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionadorComponent } from './selecionador.component';

describe('SelecionadorComponent', () => {
  let component: SelecionadorComponent;
  let fixture: ComponentFixture<SelecionadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelecionadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
