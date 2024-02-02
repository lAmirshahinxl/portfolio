import { Routes } from '@angular/router';
import { FaIndexComponent } from './features/fa-index/fa-index.component';
import { IndexComponent } from './features/index/index.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: 'fa',
    component: FaIndexComponent,
  },
  { path: '**', redirectTo: '' },
];
