import { DatePipe } from '@angular/common';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Field } from 'src/app/core/models/field';
import { Template } from 'src/app/core/models/template';
import { CognitoService } from 'src/app/services/cognito.service';
import { FieldService } from 'src/app/services/field.service';
import { SubmissionService } from 'src/app/services/submission.service';
import { TemplateService } from 'src/app/services/template.service';
const fieldTypeMapping: { [key: string]: string } = {
  'Text input': 'text',
  Date: 'date',
  Numeric: 'number',
  Password: 'password',
  'Multiple Select': 'select',
  'Single Select': 'select',
  Checkbox: 'checkbox',
  Textarea: 'textarea',
  'Radio button': 'radio',
};

@Component({
  selector: 'app-deadlines',
  templateUrl: './deadlines.component.html',
  styleUrls: ['./deadlines.component.scss'],
})
export class DeadlinesComponent implements OnInit {
  user: any = {};
  expiringItems: Field[] = [];
  templates: Template[] = [];
  selectedTemplate: Template;
  modalRef: any;
  constructor(
    private modalService: NgbModal,
    private fieldService: FieldService,
    private templateService: TemplateService,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.getAllFields();
    this.getAllTemplates();
  }
  openTemplateModal(content: TemplateRef<any>, template: Template) {
    this.selectedTemplate = template;
    this.modalRef = this.modalService.open(content, {});
  }
  onUpdate(modal: any) {
    this.selectedTemplate.expirationDate = this.getClosestExpirationDate(
      this.selectedTemplate
    );
    this.updateTemplate(this.selectedTemplate);
    modal.close();
  }
  getExpirationStatusClass(template: Template): string {
    const status = this.expirationStatus(template);
    switch (status) {
      case 'Expired':
        return 'badge bg-danger';
      case 'Expiring soon':
        return 'badge bg-warning';
      case 'Completed':
        return 'badge bg-success';
      default:
        return 'badge';
    }
  }
  getClosestExpirationDate(template: Template): Date {
    let closestExpirationDate: Date | null = template.expirationDate;

    template.fields.forEach((field) => {
      if (field.required) {
        const fieldDate = new Date(field.expirationDate);
        if (!closestExpirationDate || fieldDate < closestExpirationDate) {
          closestExpirationDate = fieldDate;
        }
      }
    });

    return closestExpirationDate || new Date('22-05-2023');
  }

  getAllFields() {
    this.fieldService.listSingleByType('Client').subscribe((res: Field[]) => {
      res.map((item) => {
        item.fieldType = fieldTypeMapping[item.fieldType] || item.fieldType;
      });

      this.expiringItems = res;
    });
  }
  getAllTemplates() {
    this.templateService.listAll({}).subscribe((res: Template[]) => {
      this.templates = res;
      console.log(this.templates);
    });
  }
  formatDate(date: string): string {
    return this.datePipe.transform(date, 'yyyy-MM-dd')!;
  }
  updateTemplate(template: Template) {
    this.templateService.update(template._id, template).subscribe((res) => {
      console.log(res);
    });
  }
  expirationStatus(template: Template): string {
    const currentDate = new Date();
    const fifteenDaysFromNow = new Date();
    fifteenDaysFromNow.setDate(fifteenDaysFromNow.getDate() + 15);

    const date = new Date(template.expirationDate);

    if (date < currentDate) {
      return 'Expired';
    } else if (date <= fifteenDaysFromNow) {
      return 'Expiring soon';
    } else {
      return 'Completed';
    }
  }
}
