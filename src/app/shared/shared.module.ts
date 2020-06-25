import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import { ValidationErrorsModule } from './components/validation-errors/validation-errors.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ValidationErrorsModule,
  ],
  exports: [
    ValidationErrorsModule
  ]
})
export class SharedModule { }
