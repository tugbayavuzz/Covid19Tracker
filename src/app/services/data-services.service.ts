import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {dataSummary} from '../models/turkey-data';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private dailyDataUrl = 'https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.csv';

  constructor(private http: HttpClient) { }


  getDailyData() {
    return this.http.get(this.dailyDataUrl, { responseType: 'text' }).pipe(
        map((res) => {
          const data: dataSummary[] = [];
          const raw = {};
          const rows = res.split('\n');
          rows.splice(0, 1);
          rows.forEach((row) => {
            // const cols = row.split(/,(?=\s)/);
            const cols = row.split(',').map(item => item.replace(/^"(.*)"$/, '$1'));
            const cs = {
              date: cols[10],
              patients: +cols[0],
              cases: +cols[8],
              deaths: +cols[2],
              recovered: +cols[4],
              critical: +cols[11],
              pneumoniaPercent: +cols[12],
              tests: +cols[9],
            };
            const temp: dataSummary = rows[cs.date];
            if (temp) {
              temp.cases = cs.cases;
              temp.patients = cs.patients;
              temp.critical = cs.critical;
              temp.pneumoniaPercent = cs.pneumoniaPercent;
              temp.deaths = cs.deaths;
              temp.recovered = cs.recovered;
              temp.tests = cs.tests;
              raw[cs.date] = cs;
            } else {
              raw[cs.date] = cs;
            }
          });
          console.log(raw);
          return raw;
    })
    );

  }

}
