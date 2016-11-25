import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import {ViewModule} from "./view/view.module";
import {EditModule} from "./edit/edit.module";
import {EditComponent} from "./edit/edit.component";

const routes: Routes = [
  { path: '',
    component: ViewComponent
  },
  { path: 'Add',
    component: EditComponent
  },
  { path: 'Edit:id',
    component: EditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ViewModule,
    EditModule
  ],
  exports: [RouterModule],
  providers: []
})
export class GettingStartedWithAngular2RoutingModule { }
