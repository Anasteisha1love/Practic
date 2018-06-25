import {Component} from '@angular/core';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html',
  styleUrls: ['menu.css'],
})

export class MenuComponent {
  role = [
    {value: 'user-0', viewValue: 'User'},
    {value: 'manager-1', viewValue: 'Manager'},
    {value: 'admin-2', viewValue: 'Admin'}
  ];
  domain = [
    {value: 'ccc-0', viewValue: '1'},
  ];
  activeUser = [
    {value: 'v-0', viewValue: '1'},
  ];
}
