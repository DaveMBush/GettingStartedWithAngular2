import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    loadChildren: './view/view.module#ViewModule'
  },
  { path: 'Add',
    loadChildren: './edit/edit.module#EditModule'
  },
  { path: 'Edit/:id',
    loadChildren: './edit/edit.module#EditModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class GettingStartedWithAngular2RoutingModule { }
