import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductListHTTP } from './product-list-http';

describe('ProductListHTTP', () => {
  let component: ProductListHTTP;
  let fixture: ComponentFixture<ProductListHTTP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductListHTTP],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListHTTP);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
