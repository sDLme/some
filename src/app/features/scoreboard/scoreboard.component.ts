import { Component, OnInit, ViewChild } from '@angular/core';

// matirial 
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { MembersHandlerService } from '../members/members-handler.service';

import { Member } from '../members/member.model';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 11, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 14, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 15, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 16, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 17, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 18, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 19, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 20, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 24, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 25, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 26, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 27, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 28, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 29, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 30, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 31, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 32, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 33, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 34, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 35, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 36, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 37, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 38, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 39, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 40, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 41, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 42, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 43, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 44, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.scss']
})
export class ScoreboardComponent implements OnInit {

  public dataList: any;
  public displayedColumns: string[] = ['name', 'vehicle', 'cubature', 'weight', 'category', 'time'];
  public dataSource: any;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
     private membersHandlerService: MembersHandlerService,
  ) { 
    this.dataList = membersHandlerService.getMembers()
  }

  ngOnInit(): void {
    this.dataSource = this.groupAndSort(this.dataList, 'category')
  }

  public groupAndSort(array, groupField) {
    var groups = {}; 
    // Put all the rows into groups
    for (var i = 0; i < array.length; i++) {
        var row = array[i];
        var groupValue = row['category']['title'];
        groups[groupValue] = groups[groupValue] || [];
        groups[groupValue].push(row);
    }
    // Sort each group by time
    for ( groupValue in groups) {
        groups[groupValue] = groups[groupValue].sort(function(a, b) {
            return a['time'] - b['time'];
            
        });
    }
    
    return  groups;
}

}
