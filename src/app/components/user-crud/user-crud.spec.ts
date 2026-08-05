import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCRUD } from './user-crud';

describe('UserCRUD', () => {
  let component: UserCRUD;
  let fixture: ComponentFixture<UserCRUD>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCRUD],
    }).compileComponents();

    fixture = TestBed.createComponent(UserCRUD);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
