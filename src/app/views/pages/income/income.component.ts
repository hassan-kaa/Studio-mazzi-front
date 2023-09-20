import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/core/models/field';
import { Template } from 'src/app/core/models/template';
import { FieldService } from 'src/app/services/field.service';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss'],
})
export class IncomeComponent implements OnInit {
  rows: Template[];
  constructor(
    private templateService: TemplateService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllFields();
  }
  hasOptions(field: Field) {
    return field.options.length > 0;
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }
  getAllFields() {
    this.templateService
      .listAllByType('Income')
      .subscribe((res: Template[]) => {
        this.rows = res;
      });
  }
}
