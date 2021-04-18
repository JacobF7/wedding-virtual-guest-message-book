import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingGuestMessagesComponent } from './wedding-guest-messages.component';

describe('WeddingGuestMessagesComponent', () => {
  let component: WeddingGuestMessagesComponent;
  let fixture: ComponentFixture<WeddingGuestMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeddingGuestMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingGuestMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
