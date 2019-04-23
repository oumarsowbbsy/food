import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BriochedoreePage } from './briochedoree.page';

const routes: Routes = [
  {
    path: '',
    component: BriochedoreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BriochedoreePage]
})
export class BriochedoreePageModule {}
