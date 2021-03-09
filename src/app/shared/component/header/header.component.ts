import { Component, OnInit } from '@angular/core';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faImdb = faImdb;
  constructor() {}

  ngOnInit(): void {}
}
