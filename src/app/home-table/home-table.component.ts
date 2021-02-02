import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-home-table',
  templateUrl: './home-table.component.html',
  styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {

  constructor(private dataService: DataServicesService) { }
  public appCards = [
    {
      title: 'Tarih',
      url: 'tarih',
    },
    {
      title: 'Test Sayısı',
      url: 'test',
    },
    {
      title: 'Vaka',
      url: 'vaka',
    },
    {
      title: 'İyileşen',
      url: 'iyilesen',
    },
    {
      title: 'Vefat',
      url: 'vefat',
    },
    {
      title: 'Ağır Hasta Sayısı',
      url: 'kritil',
    },
    {
      title: 'Zatüre Oranı',
      url: 'zature',
    },

  ];

  ngOnInit() {
    this.dataService.getDailyData()
        .subscribe({
          next: (res) => {
            console.log(res);

      }
    });
  }


}
