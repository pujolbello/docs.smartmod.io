import { Component, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('expandCollapse', [
      state('show', style({
        height: '*', // Ajusta este valor a la altura de tu pie de página
        opacity: 1
      })),
      state('hide', style({
        height: '0',
        opacity: 0
      })),
      transition('show <=> hide', animate('200ms ease-out'))
    ])
  ]
})
export class AppComponent {
  show_footer:boolean = false;

  @HostListener('window:scroll', ['$event']) 
  onScroll(event: any) {
    let pos = (document.getElementsByClassName('container')[0].scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.getElementsByClassName('container')[0].scrollHeight;
    if (pos + 5 >= max) {
    this.show_footer = true;
    }else{
      this.show_footer = false;
    }
  }
  title = 'docs';
  constructor() {
  }

  openApiDocs(): void {
    window.open('https://smartmod.io/wp-content/docs/api-docs-v1.html', '_blank');
  }
}


