import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAddItemsComponent } from './input-add-items.component';

describe('InputAddItemsComponent', () => {
  let component: InputAddItemsComponent;
  let fixture: ComponentFixture<InputAddItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputAddItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputAddItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
