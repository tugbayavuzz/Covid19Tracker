import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {

  constructor() { }
  public appCards = [
    {
      title: 'VAKA SAYISI',
      url: 'veriseti',
    },
    {
      title: 'VEFAT SAYISI',
      url: 'veriseti',
    },
    {
      title: 'İYİLEŞEN SAYISI',
      url: 'veriseti',
    }
  ];

  ngOnInit() {}


}
