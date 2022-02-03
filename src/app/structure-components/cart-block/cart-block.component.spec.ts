import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartBlockComponent } from './cart-block.component';

describe('CartBlockComponent', () => {
  let component: CartBlockComponent;
  let fixture: ComponentFixture<CartBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
