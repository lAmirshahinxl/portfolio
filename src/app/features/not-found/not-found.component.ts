import { Component } from '@angular/core';
import { MainHeaderComponent } from '../components/main-header/main-header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss',
  imports: [MainHeaderComponent],
})
export class NotFoundComponent {}
