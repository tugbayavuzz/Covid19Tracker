import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {DataSummary} from '../models/turkeydata';


@Component({
    selector: 'app-home-table',
    templateUrl: './home-table.component.html',
    styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {
    patients = 0;
    cases = 0;
    deaths = 0;
    recovered = 0;
    critical = 0;
    pneumoniaPercent = 0;
    tests = 0;
    dataSummaries: DataSummary[];
    datatable = [];
    loading = true;
    chart = {
        PieChart: 'PieChart',
        height: 500,
        options: {
            animation: {
                duration: 1000,
                easing: 'out',
            },
        },
    };


    constructor(private dataService: DataServicesService) {
    }

    ngOnInit() {
        this.dataService.getDailyData()
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.dataSummaries = res;
                    res.forEach(cs => {
                        if (!Number.isNaN(cs.date)) {
                            this.patients = cs.patients;
                            this.critical = cs.critical;
                            this.cases = cs.cases;
                            this.recovered = cs.recovered;
                            this.pneumoniaPercent = cs.pneumoniaPercent;
                            this.deaths = cs.deaths;
                            this.tests = cs.tests;
                        }
                    });
                    this.initChart();
                }
            });
    }


    initChart() {
        this.datatable = [];
        this.dataSummaries.forEach(cs => {
            this.datatable.push([cs.date, cs.patients]);
            {}
        });
        console.log(this.datatable);
    }
}
