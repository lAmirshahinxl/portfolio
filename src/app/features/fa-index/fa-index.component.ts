import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { ProjectModel } from '../../shared/models/project.model';
import { PROJECTS_LIST } from '../../shared/utils/statics';
import { FaMainHeaderComponent } from '../components/fa-main-header/fa-main-header.component';
import { LoadingComponent } from '../components/loading/loading.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { FireStoreService } from '../services/firestore.service';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './fa-index.component.html',
  styleUrl: './fa-index.component.scss',
  imports: [
    CommonModule,
    LoadingComponent,
    MainHeaderComponent,
    ReactiveFormsModule,
    FaMainHeaderComponent,
  ],
})
export class FaIndexComponent implements OnInit {
  private _isLoading = false;
  get isLoading(): boolean {
    return this._isLoading;
  }
  set isLoading(value: boolean) {
    this._isLoading = value;
    if (value) {
      this.toast.loading('Please wait...');
    } else {
      this.toast.close();
    }
  }
  projectList: ProjectModel[] = PROJECTS_LIST;
  requestForm!: FormGroup;
  contactRequestForm!: FormGroup;
  appealRequestForm!: FormGroup;

  constructor(
    private fireStore: FireStoreService,
    fb: FormBuilder,
    private toast: HotToastService,
    private renderer: Renderer2
  ) {
    this.requestForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
      subject: ['', []],
      name: ['', [Validators.required]],
    });
    this.contactRequestForm = fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
    this.appealRequestForm = fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  async onRequestSubmit() {
    if (this.requestForm.invalid) {
      this.toast.error('Please fill all the required fields');
      return;
    }
    const formValues = {
      ...this.requestForm.value,
      date: new Date().getTime(),
    };

    this.isLoading = true;
    const success = await this.fireStore.insertRequest(formValues);
    this.isLoading = false;
    if (success) {
      this.requestForm.reset();
      this.toast.success('Your request has been submitted successfully');
    } else {
      this.toast.error('Something went wrong');
    }
  }

  async onSubmitContactRequest() {
    if (this.contactRequestForm.invalid) {
      this.toast.error('Please check input fields data');
      return;
    }
    const formValues = {
      ...this.contactRequestForm.value,
      date: new Date().getTime(),
    };

    this.isLoading = true;
    const success = await this.fireStore.submitContactRequest(formValues);
    this.isLoading = false;
    if (success) {
      this.contactRequestForm.reset();
      this.toast.success('Your request has been submitted successfully');
    } else {
      this.toast.error('Something went wrong');
    }
  }

  async onAppealRequest() {
    if (this.appealRequestForm.invalid) {
      this.toast.error('Please check input fields data');
      return;
    }
    const formValues = {
      ...this.appealRequestForm.value,
      date: new Date().getTime(),
    };

    this.isLoading = true;
    const success = await this.fireStore.submitAppealRequest(formValues);
    this.isLoading = false;
    if (success) {
      this.renderer.removeClass(document.body, 'side-content-visible');
      this.appealRequestForm.reset();
      this.toast.success('Your request has been submitted successfully');
    } else {
      this.toast.error('Something went wrong');
    }
  }

  onHireMe() {
    this.renderer.addClass(document.body, 'side-content-visible');
  }
}
