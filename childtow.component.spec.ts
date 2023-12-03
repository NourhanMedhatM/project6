import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtowComponent } from './childtow.component';

describe('ChildtowComponent', () => {
  let component: ChildtowComponent;
  let fixture: ComponentFixture<ChildtowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChildtowComponent]
    });
    fixture = TestBed.createComponent(ChildtowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
