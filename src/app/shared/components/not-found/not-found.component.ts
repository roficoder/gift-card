import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'not-found',
  template: `<div class="not-found">
  <div class="left">
      <h1>Oops!</h1>
      <p [innerHTML]="text"></p>
  </div>
  <div class="right">
      <img src="assets/images/other/not-found.svg" alt="">
  </div>
</div>`,
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

  @Input() title: string = 'Oops!';
  @Input() text: string = "We can't seem to find that <br> Try searching for it";
  // @Input() iconWidth: any = 'auto';

  constructor() { }

  ngOnInit(): void {
  }

}
