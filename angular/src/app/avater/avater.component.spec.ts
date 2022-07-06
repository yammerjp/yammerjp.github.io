import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaterComponent } from './avater.component';

describe('AvaterComponent', () => {
  let component: AvaterComponent;
  let fixture: ComponentFixture<AvaterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
