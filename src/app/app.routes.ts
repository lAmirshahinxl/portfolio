import { Routes } from '@angular/router';
import { FaIndexComponent } from './features/fa-index/fa-index.component';
import { IndexComponent } from './features/index/index.component';
import { NotFoundComponent } from './features/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'fa',
    component: FaIndexComponent,
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
  },
  { path: '**', redirectTo: 'not-found' },
];
