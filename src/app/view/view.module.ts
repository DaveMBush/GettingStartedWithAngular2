import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewComponent } from './view.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: ViewComponent}]),
    CommonModule
  ],
  declarations: [ViewComponent]
})
export class ViewModule { }
