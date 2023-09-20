import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertiesComponent } from '../properties/properties.component';
import { IncomeComponent } from '../income/income.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DeductionsComponent } from '../deductions/deductions.component';
const routes: Routes = [
  {
    path: '',
    component: SummaryComponent,
  },
];

@NgModule({
  providers: [DatePipe],
  declarations: [
    SummaryComponent,
    PropertiesComponent,
    IncomeComponent,
    DeductionsComponent,
  ],
  imports: [
    NgbModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeatherIconModule,
    NgxDatatableModule,
    NgSelectModule,
    CheckboxModule,
    TableModule,
    NgbTooltipModule,
  ],
})
export class SummaryModule {}
