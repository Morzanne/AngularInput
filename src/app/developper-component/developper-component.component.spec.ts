import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopperComponentComponent } from './developper-component.component';

describe('DevelopperComponentComponent', () => {
  let component: DevelopperComponentComponent;
  let fixture: ComponentFixture<DevelopperComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopperComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopperComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
