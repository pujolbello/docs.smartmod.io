import { Component, Input, OnInit } from '@angular/core';
import { ApiRestEndpoint } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-endpoints',
  templateUrl: './endpoints.component.html',
  styleUrls: ['./endpoints.component.scss']
})
export class EndpointsComponent implements OnInit {
@Input() endpoints:ApiRestEndpoint | undefined = undefined;

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
