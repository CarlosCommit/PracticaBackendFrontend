import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTransaccionComponent } from './list-transaccion.component';

describe('ListTransaccionComponent', () => {
  let component: ListTransaccionComponent;
  let fixture: ComponentFixture<ListTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
