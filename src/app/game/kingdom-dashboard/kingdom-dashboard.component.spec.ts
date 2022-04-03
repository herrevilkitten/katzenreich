import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingdomDashboardComponent } from './kingdom-dashboard.component';

describe('KingdomDashboardComponent', () => {
  let component: KingdomDashboardComponent;
  let fixture: ComponentFixture<KingdomDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KingdomDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KingdomDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
