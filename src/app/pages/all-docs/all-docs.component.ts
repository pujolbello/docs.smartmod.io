import { Component, OnInit } from '@angular/core';
import { DocumentationService } from 'src/app/services/documentation/documentation.service';
import { Event, ApiRestEndpoint, Documentation, MqttDocumentation, WebSocketDocumentation } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-all-docs',
  templateUrl: './all-docs.component.html',
  styleUrls: ['./all-docs.component.scss']
})
export class AllDocsComponent implements OnInit {
  documentation: Documentation[] = [];
  selectedDoc: any;
  showDocs: boolean = true;
  error?: string = undefined;
  loading: boolean = false;

  constructor(private documentationService: DocumentationService) {
    this.getDocs();
  }

  ngOnInit(): void {

  }

  getDocs() {
    this.loading = true;
    this.documentationService.getAllDocumentation().subscribe(
      (data) => {
        this.documentation.push(data);
        this.loading = false;
        this.error = undefined;
      },
      (error) => {
        this.loading = false;
        this.error = 'Oops! Error retrieving documentation, try again.';
        console.error('Error fetching documentation:', error);
      }
    );
  }

  optionsStatus(event: any) {
    if (!event && window.innerWidth < 980) {
      this.showDocs = false;
    } else {
      this.showDocs = true;
    }
  }

  setDocs(data: any) {
    this.selectedDoc = data;
  }


}
