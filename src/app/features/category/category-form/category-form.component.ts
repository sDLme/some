import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CategoryHandlerService } from './../category-handler.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  public categoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryHandlerService
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm() {
    this.categoryForm = this.fb.group({
      title: ['', Validators.required],
      description: ''
    })

  }

  public onSubmit() {
    this.categoryService.setNewMCategory(this.categoryForm.value)    
  };


}
