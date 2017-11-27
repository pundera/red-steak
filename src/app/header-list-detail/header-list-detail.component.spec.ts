import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderListDetailComponent } from './header-list-detail.component';

describe('HeaderListDetailComponent', () => {
  let component: HeaderListDetailComponent;
  let fixture: ComponentFixture<HeaderListDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderListDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
