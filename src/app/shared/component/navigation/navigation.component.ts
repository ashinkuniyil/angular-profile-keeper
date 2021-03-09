import { Component, OnInit } from '@angular/core';
import {
  faHome,
  faEye,
  faAddressBook,
} from '@fortawesome/free-solid-svg-icons';
import { faEnvira } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  icons = [
    { name: faHome, color: 'white', active: true },
    { name: faEnvira, color: 'none' },
    { name: faEye, color: 'none' },
    { name: faAddressBook, color: 'none' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
