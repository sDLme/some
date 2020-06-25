import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryHandlerService {

  private static instance: CategoryHandlerService;

  private categoryList: Category[];

  public static getInstance(): CategoryHandlerService {
    if (!CategoryHandlerService.instance) {
      CategoryHandlerService.instance = new CategoryHandlerService();
    }

    return CategoryHandlerService.instance;
  }

  constructor() { 
    this.restore();
  }


  getcategory() {
    return this.categoryList.slice();
  }

  setNewMCategory(item: Category) {
    this.categoryList.push(item)
    this.store()
  }

  restore() {
    if (localStorage['Category List']) {
      this.categoryList = JSON.parse(localStorage.getItem('Category List'));
    } else {
      this.categoryList = [];
    }
  }

  store() {
    localStorage.setItem('Category List', JSON.stringify(this.categoryList));
  }
  
  deleteICategory(index){
    this.categoryList.splice(index, 1);
    this.store();
  }
}
