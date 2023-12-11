import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadeFormService {

  constructor(private formBuilder: FormBuilder) {}

  validatePostForm(): FormGroup {
    return this.formBuilder.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
    });
  }
}
