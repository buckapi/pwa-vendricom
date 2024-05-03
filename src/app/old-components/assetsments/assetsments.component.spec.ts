import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsmentsComponent } from './assetsments.component';

describe('AssetsmentsComponent', () => {
  let component: AssetsmentsComponent;
  let fixture: ComponentFixture<AssetsmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetsmentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AssetsmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
