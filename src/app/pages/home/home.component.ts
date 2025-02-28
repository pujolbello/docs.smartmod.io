import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show_footer:boolean = false;

  onScroll(event: any) {
    let pos = (document.getElementsByClassName('container')[0].scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.getElementsByClassName('container')[0].scrollHeight;
    if (pos + 5 >= max) {
    this.show_footer = true;
    }else{
      this.show_footer = false;
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
