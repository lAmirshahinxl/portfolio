import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProjectModel } from '../../shared/models/project.model';
import { PROJECTS_LIST } from '../../shared/utils/statics';
import { LoadingComponent } from '../components/loading/loading.component';
import { MainHeaderComponent } from '../components/main-header/main-header.component';
import { FireStoreService } from '../services/firestore.service';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  imports: [
    CommonModule,
    LoadingComponent,
    MainHeaderComponent,
    ReactiveFormsModule,
  ],
})
export class IndexComponent implements OnInit {
  isLoading: boolean = false;
  projectList: ProjectModel[] = PROJECTS_LIST;
  requestForm!: FormGroup;

  constructor(
    private fireStore: FireStoreService,
    fb: FormBuilder,
    private toastr: ToastrService
  ) {
    this.requestForm = fb.group({
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      content: ['', [Validators.required]],
      subject: ['', []],
      name: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {}

  onRequestSubmit() {
    if (this.requestForm.invalid) {
      this.toastr.error('Please fill all the required fields');
      return;
    }
    const formValues = {
      ...this.requestForm.value,
      date: new Date().getTime(),
    };

    console.log('this is for value');

    console.log(formValues);

    this.isLoading = true;
    this.fireStore
      .insertRequest(formValues)
      .then(() => {
        this.isLoading = false;
        this.requestForm.reset();
        this.toastr.success('Request Submitted Successfully');
      })
      .catch((err) => {
        this.isLoading = false;
        this.toastr.error(err);
      });
  }
}
