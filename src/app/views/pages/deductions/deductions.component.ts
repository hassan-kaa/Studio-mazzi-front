import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Template } from 'src/app/core/models/template';
import { FieldService } from 'src/app/services/field.service';
import { TemplateService } from 'src/app/services/template.service';

@Component({
  selector: 'app-deductions',
  templateUrl: './deductions.component.html',
  styleUrls: ['./deductions.component.scss'],
})
export class DeductionsComponent implements OnInit {
  rows: Template[] = [];
  constructor(
    private templateService: TemplateService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllTemplates();
  }

  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }
  getAllTemplates() {
    this.templateService
      .listAllByType('Deduction')
      .subscribe((res: Template[]) => {
        this.rows = res;
      });
  }
}
