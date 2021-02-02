import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

import { MembersHandlerService } from '../../members/members-handler.service';

import { Member } from '../../members/member.model';

@Component({
  selector: 'app-round',
  templateUrl: './round.component.html',
  styleUrls: ['./round.component.scss']
})
export class RoundComponent implements OnInit {

  @Input() data: Member[];
  @Output() create: EventEmitter<any> = new EventEmitter<any>();
  public displayedColumns: string[] = ['name', 'vehicle', 'cubature', 'weight', 'category', 'time', 'penalty'];
  public dataSource: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
  }

  public onLoadMember() {
    this.router.navigate(['/members'])
  }

}
