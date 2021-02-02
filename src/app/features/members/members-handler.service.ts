import { Injectable } from '@angular/core';
import { Member } from './member.model';

@Injectable({
  providedIn: 'root'
})
export class MembersHandlerService {

  private static instance: MembersHandlerService;

  private membersList: Member[] = [
    new Member( 'Sergey', 'test@gmaol.com', 'Honda 600', '600', '250', 'A', 2, 2),
    new Member( 'Vadim', 'test@gmaol.com', 'Yamaha 1300', '1300', '350', 'C', 3,1),
    new Member( 'Vadim2', 'test@gmaol.com', 'Yamaha 1300', '1300', '550',  'D', 6, 5),
    new Member( 'Alex', 'test@gmaol.com', 'Kavasacy 1400', '1400',  '300', 'D',  4, 4),
    new Member( 'Pit', 'test@gmaol.com', 'Suzuky 400', '400',  '200', 'B', 8, 7),
  ];

  public static getInstance(): MembersHandlerService {
    if (!MembersHandlerService.instance) {
      MembersHandlerService.instance = new MembersHandlerService();
    }

    return MembersHandlerService.instance;
  }

  constructor() { 
    this.restore();
  }


  getMembers() {
    return this.membersList.slice();
  }

  setNewMember(member: Member) {
    this.membersList.push(member)
    this.store()
  }

  restore() {
    if (localStorage['Members List']) {
      this.membersList = JSON.parse(localStorage.getItem('Members List'));
    } else {
      this.membersList = [];
    }
  }

  store() {
    localStorage.setItem('Members List', JSON.stringify(this.membersList));
  }
  
  deleteIMember(index){
    this.membersList.splice(index, 1);
    this.store();
  }

}
