import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Field } from 'src/app/core/models/field';
import { Template } from 'src/app/core/models/template';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent implements OnInit {
  rows: Template[] = [];
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
      .listAllByType('Client')
      .subscribe((res: Template[]) => {
        this.rows = res;
      });
  }
}
