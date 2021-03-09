import { Component, OnInit } from '@angular/core';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DataStore } from '../utilities/data-store';
import { config } from '../config/app.config';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  faImdb = faImdb;
  loginForm: FormGroup;
  data: any = {};
  dataStore: DataStore;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private httpClient: HttpClient
  ) {
    this.dataStore = DataStore.getInstance();
    this.loginForm = this.formBuilder.group({
      username: ['eve.holt@reqres.in', Validators.required],
      password: ['cityslicka', Validators.required],
    });
  }

  ngOnInit(): void {}
  actLogin() {
    this.httpClient
      .post(`${config.apiURL}login`, this.loginForm.value)
      .subscribe((data) => {
        this.dataStore.setData('token', data);
        this.router.navigate(['/', 'dashboard']);
      });
  }
}
