import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Documentation } from './interfaces/documentation.interface';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {
  api_host:string = 'https://api.smartmod.io:3001/documentation';

  constructor(private http: HttpClient) { 
  }

  getDataFromApi(endpoint: string): Observable<Documentation> {
    return this.http.get<any>(endpoint);
  }



  getAllDocumentation(){
    return this.getDataFromApi(this.api_host);
  }
}
