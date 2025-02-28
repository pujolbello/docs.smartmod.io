import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiRestDocsComponent } from './api-rest-docs.component';

describe('ApiRestDocsComponent', () => {
  let component: ApiRestDocsComponent;
  let fixture: ComponentFixture<ApiRestDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiRestDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiRestDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
