import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {DataSummary} from '../models/turkeydata';

@Injectable({
  providedIn: 'root'
})
export class DataServicesService {

  private dailyDataUrl = 'https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.csv';
 /* month;
  date;
  year;

  getDate(date: number){
    if (date < 10){
        return '0' + date;
    }
    return date;
  }

  constructor(private http: HttpClient) {
      const  now = new Date();
      this.month = now.getMonth() + 1;
      this.date = now.getDate();
      this.year = now.getFullYear();

      console.log({
          month: this.month,
          date: this.date,
          year: this.year
      });
      this.dailyDataUrl = `${this.dailyDataUrl}${this.getDate(this.month)}-${this.getDate(this.date)}-${this.getDate(this.year)}`;
      console.log(this.dailyDataUrl);
  }

*/
  constructor(private http: HttpClient) {}
  getDailyData() {
    return this.http.get(this.dailyDataUrl, { responseType: 'text' }).pipe(
        map((res) => {
          const data: DataSummary[] = [];
          const raw = {};
          const rows = res.split('\n');
          rows.splice(0, 1);
          rows.forEach((row) => {
            // const cols = row.split(/,(?=\s)/);
            const cols = row.split(',').map(item => item.replace(/^"(.*)"$/, '$1'));
            const cs = {
              date: cols[10],
              patients: +cols[0],
              cases: +cols[13],
              deaths: +cols[2],
              recovered: +cols[4],
              critical: +cols[11],
              pneumoniaPercent: +cols[12],
              tests: +cols[8],
            };
            const temp: DataSummary = rows[cs.date];
            if (temp) {
              // @ts-ignore
              temp.cases = cs.cases + temp.cases;
              temp.patients = cs.patients + temp.patients;
              temp.critical = cs.critical + temp.critical;
              temp.pneumoniaPercent = cs.pneumoniaPercent + temp.pneumoniaPercent;
              temp.deaths = cs.deaths + temp.deaths;
              temp.recovered = cs.recovered + temp.recovered;
              temp.tests = cs.tests + temp.tests;
              raw[cs.date] = temp;
            } else {
              raw[cs.date] = cs;
            }

          });
          return Object.values(raw) as DataSummary[];
    })
    );

  }

}
