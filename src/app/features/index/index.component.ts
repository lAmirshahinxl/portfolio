import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { LoadingComponent } from '../components/loading/loading.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  imports: [
    CommonModule,
    LoadingComponent,
    MainHeaderComponent,
    // TranslocoModule,
  ],
})
export class IndexComponent implements OnInit {
  isLoading: boolean = true;
  isPersian: boolean = false;

  constructor(
    // private translocoService: TranslocoService,
    private route: ActivatedRoute
  ) {
    // this.route.queryParams.subscribe((params) => {
    //   const lang = params['l'] === 'fa' ? 'fa' : 'en';
    //   if (lang === 'fa') {
    //     this.isPersian = true;
    //   }
    //   this.translocoService.setActiveLang(lang);
    // });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
