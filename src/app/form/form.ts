import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.userForm = this.fb.group({
      name: [''],
      email: [''],
      age: ['']
    });
  }

  submitForm() {
    const url = 'http://localhost:8080/api/users';

  this.http.post(url, this.userForm.value)
    .subscribe({
      next: response => console.log('Success:', response),
      error: err => console.error('Error:', err)
    });
  }
}
