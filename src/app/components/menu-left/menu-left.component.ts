import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ApiRest, Documentation, MqttDocumentation, WebSocketDocumentation } from 'src/app/services/documentation/interfaces/documentation.interface';

@Component({
  selector: 'app-menu-left',
  templateUrl: './menu-left.component.html',
  styleUrls: ['./menu-left.component.scss']
})
export class MenuLeftComponent implements OnInit {
  @Input() documentation:Documentation[] |any  = [];
  @Output() optionsStatus: EventEmitter<boolean> = new EventEmitter();
  @Output() docsSelected: EventEmitter<ApiRest | WebSocketDocumentation | MqttDocumentation> = new EventEmitter();
  input_index = 0;
  isCollapsed = false;


  constructor() {

   }

  ngOnInit(): void {
    this.optionsStatus.emit(this.isCollapsed);
    this.docsSelected.emit(this.documentation[0]);
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.optionsStatus.emit(this.isCollapsed);
  }

  openContent(data: ApiRest | WebSocketDocumentation | MqttDocumentation){
    this.docsSelected.emit(data);
  }

  indexUpdate(){
  this.input_index++;
  }



  
  

}
