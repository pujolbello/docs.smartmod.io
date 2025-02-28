import { Component, Input, OnInit } from '@angular/core';
import { ApiRest, ApiRestEndpoint } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-api-rest-docs',
  templateUrl: './api-rest-docs.component.html',
  styleUrls: ['./api-rest-docs.component.scss']
})
export class ApiRestDocsComponent implements OnInit {
  @Input() documentation:ApiRestEndpoint | undefined = undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
