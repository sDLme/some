import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// module
import { SharedModule } from 'src/app/shared/shared.module';

// component
import { CategoryComponent } from './category.component';
import { CategoryFormComponent } from './category-form/category-form.component';



@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: []
})
export class CategoryModule { }
