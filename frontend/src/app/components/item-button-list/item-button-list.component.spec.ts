import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemButtonListComponent } from './item-button-list.component';

describe('ItemButtonListComponent', () => {
  let component: ItemButtonListComponent;
  let fixture: ComponentFixture<ItemButtonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemButtonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemButtonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
