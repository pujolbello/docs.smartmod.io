import { Component, Input, OnInit } from '@angular/core';
import { MqttDataPubSub } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-mqtt-docs',
  templateUrl: './mqtt-docs.component.html',
  styleUrls: ['./mqtt-docs.component.scss']
})
export class MqttDocsComponent implements OnInit {
@Input() documentation:any | undefined = undefined;
  constructor() { }

  ngOnInit(): void {

  }

  isObjectNotEmpty(obj: any): boolean {
    return obj && Object.keys(obj).length > 0;
  }

}
