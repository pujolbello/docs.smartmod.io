// @ts-nocheck
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-docs',
  templateUrl: './api-docs.html',
  styleUrls: ['./api-docs.component.scss']
})
export class ApiDocsComponent implements OnInit {


  constructor() {} // Add HttpClient as a provider

  ngOnInit(): void {
  }

}
