import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DeadlinesComponent } from './deadlines.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FeatherIconModule } from 'src/app/core/feather-icon/feather-icon.module';

import {
  NgbAccordionModule,
  NgbDatepickerModule,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
const routes: Routes = [{ path: '', component: DeadlinesComponent }];
@NgModule({
  providers: [DatePipe],
  declarations: [DeadlinesComponent],
  imports: [
    NgbAccordionModule,
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    FeatherIconModule,
    NgbDropdownModule,
    NgbDatepickerModule,
    NgApexchartsModule,
  ],
})
export class DeadlinesModule {}
