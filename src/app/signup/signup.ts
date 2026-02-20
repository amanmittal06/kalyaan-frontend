import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {

  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.pattern(/^([A-Z][a-z]*)( [A-Z][a-z]*){0,2}$/)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }


  onSubmit() {
    if (this.form.valid) {
      // handle form submission
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  goBack() {
   window.history.back();
  }

  login() {
    // Placeholder for login action
    alert('Redirect to login page (implement as needed)');
  }
}
