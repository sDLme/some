import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { MembersHandlerService } from '../members/members-handler.service';

import { Member } from '../members/member.model';
import { Round } from './round/round.model';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  public dataList: Member[]
  public dataSource: any;
  public objRound: Round[] = [];

  
  constructor(
    private membersHandlerService: MembersHandlerService,
  ) { }

  ngOnInit(): void {
   this.dataList = this.membersHandlerService.getMembers()
    if (localStorage['round']) {
      this.objRound = JSON.parse(localStorage.getItem('round'));
    } else {
      this.objRound = [];
    }
    
  }

  public newRound() {
    this.dataSource = this.groupAndSort(this.dataList)
    this.objRound.push(this.dataSource)
    localStorage.setItem('round', JSON.stringify(this.objRound));
    console.log(this.objRound)
  }

  public groupAndSort(array) {
    var groups = {};
    // Put all the rows into groups
    for (var i = 0; i < array.length; i++) {
      var row = array[i];
      var groupValue = row['category']['title'];
      groups[groupValue] = groups[groupValue] || [];
      groups[groupValue].push(row);
    }
    // Sort each group by time
    for (groupValue in groups) {
      groups[groupValue] = groups[groupValue].sort(function (a, b) {
        return a['time'] - b['time'];

      });
    }

    return groups;
  }

}
