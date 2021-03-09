import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  profileForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      firstname: [null, Validators.required],
      lastname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      addressOne: [null, Validators.required],
      addressTwo: [null],
      city: [null, Validators.required],
    });
  }

  ngOnInit(): void {}
  submit() {}
}
