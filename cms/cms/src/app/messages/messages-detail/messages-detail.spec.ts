import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesDetail } from './messages-detail';

describe('MessagesDetail', () => {
  let component: MessagesDetail;
  let fixture: ComponentFixture<MessagesDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagesDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
