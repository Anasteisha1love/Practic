import { Component } from '@angular/core';
import {Sort} from '@angular/material';
@Component({
  selector: 'main',
  templateUrl: './main.html',
  styleUrls: [ './main.css' ]
})
export class MainComponent  {
  // opened: boolean;
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
  
  user = [
    { name: 'Edith Pittman',  domain: 'Nexus Optimus', last: 'Never logged in' },
    { name: 'Mu`izz Rahal',   domain: 'Infuse Epic V', last: '7:17 PM GMT+1' },
    { name: 'Zhen Ch`in',     domain: 'Galaxy Plus',   last: 'Jan 13' },
    { name: 'Fethawit Elias', domain: 'Galaxy Plus',   last: 'Dec 30, 2014' },
    { name: 'Kerman Poirer',  domain: 'Nexus Optimus', last: '7:17 PM GMT+1' },
  ];

  sortedData;

  constructor() {
    this.sortedData = this.user.slice();
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
        case 'name': return compare(a.name, b.name, isAsc);
        case 'domain': return compare(+a.domain, +b.domain, isAsc);
        case 'last': return compare(+a.last, +b.last, isAsc);
        default: return 0;
      }
    });
  }
}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
