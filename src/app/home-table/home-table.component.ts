import { Component, OnInit } from '@angular/core';
import { DataServicesService } from '../services/data-services.service';
import { DataSummary } from '../models/turkeydata';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-home-table',
    templateUrl: './home-table.component.html',
    styleUrls: ['./home-table.component.scss'],
})
export class HomeTableComponent implements OnInit {
    currentDate = new Date();
    patients = 0;
    cases = 0;
    deaths = 0;
    recovered = 0;
    critical = 0;
    pneumoniaPercent = 0;
    tests = 0;
    dataSummaries: DataSummary[];
    datatable = [];
    weeklyTable = [];
    chart = {
        PieChart: 'PieChart',
        options: {
            vAxis: {
                title: 'Popularity',
                direction: '-1'
            },
            height: 500,
            width: 1200,
            is3D: true,
            title: 'Zamana Göre Vaka Sayısı',
            titleTextStyle: {
                color: 'black',
                fontName: 'Arial',
                fontSize: 30,
            },
            legend: { position: 'bottom' },
            animation: {
                duration: 10,
                easing: 'out',
            },
        },
        AreaChart: 'AreaChart',
        options1: {
            height: 500,
            width: 1200,
            is3D: true,
            title: 'Zamana Göre Vaka Sayısı',
            titleTextStyle: {
                color: 'black',
                fontName: 'Arial',
                fontSize: 30,
            },
            legend: { position: 'bottom' },
            animation: {
                duration: 1000,
                easing: 'out',
            },
        },
    };

    constructor(private dataService: DataServicesService) {}
/* // dark mode
    onToggleColorTheme(event){
        console.log(event.detail.checked);
        if (event.detail.checked){
            document.body.setAttribute('color-theme', 'dark');
        }
        else {
            document.body.setAttribute('color-theme', 'light');
        }

    }
*/
    ngOnInit() {
        this.dataService.getDailyJsonData().subscribe({
            next: (res) => {
                console.log(res);
                this.dataSummaries = res;
                res.forEach((cs) => {
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
            },
        });
        // this.dataService.getDailyData().subscribe({
        //   next: (res) => {
        //     console.log(res);
        //     this.dataSummaries = res;
        //     res.forEach((cs) => {
        //       if (!Number.isNaN(cs.date)) {
        //         this.patients = cs.patients;
        //         this.critical = cs.critical;
        //         this.cases = cs.cases;
        //         this.recovered = cs.recovered;
        //         this.pneumoniaPercent = cs.pneumoniaPercent;
        //         this.deaths = cs.deaths;
        //         this.tests = cs.tests;
        //       }
        //     });
        //     this.initChart();
        //   },
        // });
    }
    initChart() {
        this.datatable = [];
        this.weeklyTable = [];

        this.dataSummaries.forEach((cs) => {
            this.datatable.push([cs.date, cs.cases]);
        });
        // son 7 günün :) chartta gösterilmesi ama çalışmıyor .ÇALIŞTI.
        for (let i = 0; i < 7; i++) {
            this.weeklyTable[i] = this.datatable[this.datatable.length - 1];
            this.datatable.length -= 1;
        }
        console.log(this.weeklyTable);
    }
}
