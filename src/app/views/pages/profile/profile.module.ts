import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
  },
];
@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes)],
})
export class ProfileModule {}
