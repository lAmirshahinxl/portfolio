import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// import { TranslocoModule, TranslocoService } from '@ngneat/transloco';
import { ProjectModel } from '../../shared/models/project.model';
import { PROJECTS_LIST } from '../../shared/utils/statics';
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
  projectList: ProjectModel[] = PROJECTS_LIST;

  constructor() {
    // private translocoService: TranslocoService,
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

  // async onSubmitAppeal(): Promise<void> {
  //   try {
  //     this.loading = true;
  //     const email = this.signInForm.value.email as string;
  //     const { error } = await this.supabase.signIn(email);
  //     if (error) throw error;
  //     alert('Check your email for the login link!');
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //   } finally {
  //     this.signInForm.reset();
  //     this.loading = false;
  //   }
  // }
}
