import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserReceiptComponent } from './user-receipt.component';

describe('UserReceiptComponent', () => {
  let component: UserReceiptComponent;
  let fixture: ComponentFixture<UserReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
