import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// services
import { MembersHandlerService } from '../members-handler.service';

// models
import { Category } from '../../category/category.model';
import { CategoryHandlerService } from '../../category/category-handler.service';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  public membersForm: FormGroup;
  public categoryList: Category[];

  constructor(
    private fb: FormBuilder,
    private membersHandlerService: MembersHandlerService,
    private categoryService: CategoryHandlerService
  ) {

    this.categoryList = this.categoryService.getcategory()
   }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm() {
    this.membersForm = this.fb.group({
      name: ['', Validators.required],
      email: '',
      vehicle: ['', Validators.required],
      cubature: ['', Validators.required],
      weight: ['', Validators.required],
      category: [null, Validators.required],
      time: ''
    })

  }

  public onSubmit() {
    this.membersHandlerService.setNewMember(this.membersForm.value)    
  };


  

}
