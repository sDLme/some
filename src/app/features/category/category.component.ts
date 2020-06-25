import { Component, OnInit } from '@angular/core';

// services
import { CategoryHandlerService } from './category-handler.service';
import { Category } from './category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  public categoryList: Category[];

  constructor(
    private categoryService: CategoryHandlerService
  ) {

    this.categoryList = this.categoryService.getcategory()
   }

  ngOnInit(): void {
  }
}
