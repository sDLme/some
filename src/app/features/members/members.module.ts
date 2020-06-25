import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

// components
import { MembersComponent } from './members.component';
import { MemberFormComponent } from './member-form/member-form.component';

// modules
import { MembersRoutingModule } from './members-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    MembersComponent, 
    MemberFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MembersRoutingModule,
    NgSelectModule,
    SharedModule
  ],
  exports: []
})
export class MembersModule { }
