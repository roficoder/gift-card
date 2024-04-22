import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bottom-border-line',
  template: `
    <div class="border_bottom_line" [ngStyle]="style()"></div>
  `,
  styleUrls: ['./border-line.component.scss']
})
export class BorderLineComponent implements OnInit {

  @Input() height: number = 0;
  @Input() color: string = '--bottom_border_line';
  constructor() { }

  ngOnInit(): void {
  }


  style(){
    return {
      height: this.height + 'px',
      borderBottom: `thin solid var(${this.color})`
    }
  }


}
