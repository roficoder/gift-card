import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

// const arr = [
// ]

@NgModule({
  declarations: [
    // ...arr,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    // ...arr,
  ],
  providers: [
    DatePipe
  ]
})
export class BlocksModule { }
