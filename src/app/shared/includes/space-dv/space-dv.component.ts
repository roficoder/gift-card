import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'space-dv',
  template: '<div [ngStyle]="style()"></div>',
  styles: ['']
})
export class SpaceDvComponent implements OnInit {

  @Input() height : number = 10;
  @Input() fixed: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  style(){

    if(window.innerWidth >= 1200 || this.fixed){
      return {
        height: this.height + 'px'
      }
    }
    else if(window.innerWidth >= 767){
      return {
        height: this.height/2 + 'px'
      }
    }else {
      return {
        height: this.height/3 + 'px'
      }
    }

  }
}
