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

  getDailyData(){
    return this.http.get(this.dailyDataUrl, {responseType: 'text'}).pipe(
        map(res => {
          const data: dataSummary[] = [];
          const raw = {};
          const rows = res.split('\n');
          rows.splice(0, 1);
          // console.log(rows);
          rows.forEach(row => {
            const cols = row.split(/,([^"]+)/g);
            const cs = {
              date: cols[0],
              tests: +cols[7],
              cases: +cols[8],
              patients: +cols[9],
              critical: +cols[10],
              pneumoniaPercent: +cols[11],
              deaths: +cols[12],
              recovered: +cols[13],
            };
            const temp: dataSummary = rows[cs.date];
            if (temp) {
              temp.tests = cs.tests;
              temp.cases = cs.cases;
              temp.patients = cs.patients;
              temp.critical = cs.critical;
              temp.pneumoniaPercent = cs.pneumoniaPercent;
              temp.deaths = cs.deaths;
              temp.recovered = cs.recovered;

              raw[cs.date] = cs;
            }
            else{
              raw[cs.date] = cs;
            }

          });
          console.log(raw);
          return [];
    })
    );

  }

}
