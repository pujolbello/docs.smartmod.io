import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-websocket-docs',
  templateUrl: './websocket-docs.component.html',
  styleUrls: ['./websocket-docs.component.scss']
})
export class WebsocketDocsComponent implements OnInit {
@Input() documentation:Event | undefined = undefined;
selectedResponse: any = null;
  constructor() { }

  ngOnInit(): void {
  }

  isObjectNotEmpty(obj: any): boolean {
    return obj && Object.keys(obj).length > 0;
  }

  selectResponse(index: number, response:any): void {
    this.selectedResponse = {index, response};
  }

}
