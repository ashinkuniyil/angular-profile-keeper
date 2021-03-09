import { HttpClient } from '@angular/common/http';
import { Component, AfterViewInit } from '@angular/core';
import { DataStore } from '../../utilities/data-store';
import { config } from '../../config/app.config';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements AfterViewInit {
  dataStore: DataStore;
  displayedColumns: string[] = ['first_name', 'age', 'last_name', 'employee'];
  data: UserDetails[] = [];

  isLoadingResults = true;
  isRateLimitReached = false;

  constructor(private _httpClient: HttpClient) {
    this.dataStore = DataStore.getInstance();
  }

  ngAfterViewInit() {
    this._httpClient
      .get(`${config.apiURL}users?page=2`)
      .subscribe((data: any) => {
        this.data = data?.data;
        this.isLoadingResults = false;
      });
  }
}

export interface UserDetails {
  first_name: string;
  age?: string;
  last_name: string;
  employee?: string;
}
