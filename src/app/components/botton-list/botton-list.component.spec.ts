import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonListComponent } from './botton-list.component';

describe('BottonListComponent', () => {
  let component: BottonListComponent;
  let fixture: ComponentFixture<BottonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottonListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
