import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LoadingComponent } from '../components/loading/loading.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';

@Component({
  selector: 'app-fa-index',
  standalone: true,
  templateUrl: './fa-index.component.html',
  styleUrl: './fa-index.component.scss',
  imports: [CommonModule, LoadingComponent, MainHeaderComponent],
})
export class FaIndexComponent {
  isLoading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
