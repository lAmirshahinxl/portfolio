import { Routes } from '@angular/router';
import { IndexComponent } from './features/index/index.component';

export const routes: Routes = [
  {
    path: 'index',
    component: IndexComponent,
    children: [
      {
        path: 'movies',
        loadComponent: () =>
          import('./features/index/index.component').then(
            (m) => m.IndexComponent
          ),
      },
    ],
  },
];

