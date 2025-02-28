import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { DocumentationContent } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContentsComponent implements OnInit {
 @Input() contents: DocumentationContent[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
