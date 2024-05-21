import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NofundViewComponent } from './nofund-view.component';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  { path: '', component: NofundViewComponent }
];

@NgModule({
  declarations: [NofundViewComponent],
  imports: [CommonModule, RouterModule.forChild(routes)]
})
export class NoFoundViewModule { }
