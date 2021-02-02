import { Component, OnInit } from '@angular/core';
import { MembersHandlerService } from './members-handler.service';
import { Member } from './member.model';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  public timeForm: FormGroup;
  public mambersList: Member[];
  public mamber: any;

  constructor(
    private fb: FormBuilder,
    private membersHandlerService: MembersHandlerService,
    private route: ActivatedRoute
  ) {
    this.mambersList = this.membersHandlerService.getMembers();
   }

  ngOnInit(): void {
    this.getMamber()
  }

  public getMamber() {
    const name = this.route.snapshot.params['name']
   
    this.route.params.subscribe( (params: Params) => {
       this.mamber = this.mambersList.find(x => x.name === name)
  })
    this.createForm()
  }

  private createForm() {
    this.timeForm = this.fb.group({
      time: [''],
      penalty: ['']
    })
  }

}