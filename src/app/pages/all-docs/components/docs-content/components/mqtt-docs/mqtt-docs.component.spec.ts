import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MqttDocsComponent } from './mqtt-docs.component';

describe('MqttDocsComponent', () => {
  let component: MqttDocsComponent;
  let fixture: ComponentFixture<MqttDocsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MqttDocsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MqttDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
