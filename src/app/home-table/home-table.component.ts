import {Component, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {DataSummary} from '../models/turkeydata';
import {GoogleChartInterface} from 'ng2-google-charts';

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
    dataSummary: DataSummary[];
    pieChart: GoogleChartInterface = {
        chartType: 'pieChart'
    };

    constructor(private dataService: DataServicesService) {
    }

    initCharts() {

        const datatable = [];
        datatable.push(['Date', 'Cases']);
        this.dataSummary.forEach(cs => {
            // tslint:disable-next-line:no-unused-expression
            datatable.push[
                // tslint:disable-next-line:no-unused-expression
                cs.date, cs.tests, cs.deaths, cs.cases
                ];
        });
        console.log(datatable);

        this.pieChart = {
            chartType: 'PieChart',
            dataTable: [
                ['Task', 'Hours per Day'],
                ['Work',     11],
                ['Eat',      2],
                ['Commute',  2],
                ['Watch TV', 2],
                ['Sleep',    7]
            ],
        };


    }

    ngOnInit() {
        this.dataService.getDailyData()
            .subscribe({
                next: (res) => {
                    console.log(res);
                    this.dataSummary = res;
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
                    this.initCharts();
                }
            });
    }

}
