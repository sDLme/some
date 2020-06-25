import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html',
})
export class ValidationErrorsComponent implements OnInit {

  @Input() errorPrefix: string;
  @Input() errors: ValidationErrors;

  constructor() { }

  ngOnInit(): void {
  }

}
