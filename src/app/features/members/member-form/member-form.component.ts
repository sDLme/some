import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-member-form',
  templateUrl: './member-form.component.html',
  styleUrls: ['./member-form.component.scss']
})
export class MemberFormComponent implements OnInit {

  public membersForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createForm()
  }

  private createForm() {
    this.membersForm = this.fb.group({
      name: '',
      email: '',
      vehicle: '',
      cubature: '',
      weight: '',
      time: ''
    })

  }

  public onSubmit() {
    console.log(this.membersForm)
    
  };

}
