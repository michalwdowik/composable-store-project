import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  myForm: FormGroup

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: ['', Validators.required],
      company: ['', Validators.required],
      companyEmail: ['', Validators.required],
      jobType: ['', Validators.required],
    })
  }
}
