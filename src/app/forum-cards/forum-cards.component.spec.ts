import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumCardsComponent } from './forum-cards.component';

describe('ForumCardsComponent', () => {
  let component: ForumCardsComponent;
  let fixture: ComponentFixture<ForumCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForumCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForumCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
