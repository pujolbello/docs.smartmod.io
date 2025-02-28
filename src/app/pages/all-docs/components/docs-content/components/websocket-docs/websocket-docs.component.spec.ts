import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketDocsComponent } from './websocket-docs.component';

describe('WebsocketDocsComponent', () => {
  let component: WebsocketDocsComponent;
  let fixture: ComponentFixture<WebsocketDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebsocketDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WebsocketDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
