import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-form-error-messages',
  templateUrl: './form-error-messages.component.html',
  styleUrls: ['./form-error-messages.component.scss']
})
export class FormErrorMessagesComponent implements OnInit {

  @Input('field') field !: NgModel;
  @Input('message') message !: string;
  @Input('checkbox') checkbox: boolean = false;
  @Input('select') select: boolean = false;
  @Input('customTouch') customTouch: boolean = false;
  @Input('min') min !: any;
  @Input('max') max !: any;

  constructor() { }

  ngOnInit(): void {
    if(this.min && this.max){
      this.min = parseInt(this.min);
      this.max = parseInt(this.max);
    }
  }



}
