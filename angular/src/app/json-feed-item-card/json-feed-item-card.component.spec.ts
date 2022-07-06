import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonFeedItemCardComponent } from './json-feed-item-card.component';

describe('JsonFeedItemCardComponent', () => {
  let component: JsonFeedItemCardComponent;
  let fixture: ComponentFixture<JsonFeedItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonFeedItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonFeedItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
