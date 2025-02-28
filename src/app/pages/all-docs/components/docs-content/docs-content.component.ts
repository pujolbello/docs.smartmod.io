import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ApiRest,  ApiRestEndpoint,  Documentation,  Event,  MqttDataPubSub,  MqttDocumentation,  WebSocketDocumentation } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-docs-content',
  templateUrl: './docs-content.component.html',
  styleUrls: ['./docs-content.component.scss']
})
export class DocsContentComponent implements OnInit {
@Input() documentation:ApiRestEndpoint | Event | MqttDocumentation | Documentation | MqttDataPubSub | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

  setDocs(data:ApiRestEndpoint | Event | MqttDocumentation | MqttDataPubSub){
    this.documentation = data;
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    // if(changes){
    //  console.log(changes['documentation'].currentValue);
    // }
  }

}
