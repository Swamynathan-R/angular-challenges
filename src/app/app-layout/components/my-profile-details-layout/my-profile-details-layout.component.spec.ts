import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileDetailsLayoutComponent } from './my-profile-details-layout.component';

describe('MyProfileDetailsLayoutComponent', () => {
  let component: MyProfileDetailsLayoutComponent;
  let fixture: ComponentFixture<MyProfileDetailsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyProfileDetailsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileDetailsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
