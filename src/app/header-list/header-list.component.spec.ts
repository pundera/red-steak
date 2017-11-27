import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersListComponent } from './headers-list.component';

describe('HeadersListComponent', () => {
  let component: HeadersListComponent;
  let fixture: ComponentFixture<HeadersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
