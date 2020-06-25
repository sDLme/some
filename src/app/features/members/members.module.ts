import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components
import { MembersComponent } from './members.component';

// modules
import { MembersRoutingModule } from './members-routing.module';
import { MemberFormComponent } from './member-form/member-form.component';



@NgModule({
  declarations: [MembersComponent, MemberFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MembersRoutingModule,
  ],
  exports: []
})
export class MembersModule { }
