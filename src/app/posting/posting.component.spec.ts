import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostingComponent } from './posting.component';

describe('PostingComponent', () => {
  let component: PostingComponent;
  let fixture: ComponentFixture<PostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostingComponent ]
     
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
