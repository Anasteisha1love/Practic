import { Component } from '@angular/core';
import {Sort} from '@angular/material';

import {HttpClient} from '@angular/common/http';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
import {Injectable} from '@angular/core'
// import {IEmployee} from './IEmploee'

@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: [ './main.css' ]
})

@Injectable()
export class MainComponent  {
  user;
  sortedData;

  
  getUsers(){
    this.user = this.http.get('/api'), map((res: Response) => res.json());
    this.sortedData = (this.user);
  }
  constructor(private http: HttpClient) {
    this.getUsers();
  }
  sortData(sort: Sort) {
    const data = this.user.slice();
    if (!sort.active || sort.direction == '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      let isAsc = sort.direction == 'asc';
      switch (sort.active) {
        case 'name': return compare(a.first_name, b.first_name, isAsc);
        case 'domain': return compare(a.domain, b.domain, isAsc);
        case 'last': return compare(+a.last, +b.last, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
