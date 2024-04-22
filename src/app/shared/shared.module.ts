import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';

import { FormErrorMessagesComponent } from './components/form-error-messages/form-error-messages.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const compArr = [
  FooterComponent,
  FormErrorMessagesComponent,
  NotFoundComponent,
];

const modules = [
  FormsModule,
];

@NgModule({
  declarations: [...compArr],
  imports: [CommonModule, ...modules],
  exports: [...compArr, ...modules],
})
export class SharedModule {}
