import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule.forChild([{path: '', component: EditComponent}]),
    CommonModule
  ],
  declarations: [EditComponent]
})
export class EditModule { }
