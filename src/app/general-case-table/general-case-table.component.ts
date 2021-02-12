import {AfterViewInit, Component, OnInit} from '@angular/core';
import { ViewChild, ElementRef} from '@angular/core';



declare var google: any;
@Component({
  selector: 'app-general-case-table',
  templateUrl: './general-case-table.component.html',
  styleUrls: ['./general-case-table.component.scss'],
})
export class GeneralCaseTableComponent implements OnInit, AfterViewInit{


  @ViewChild('map') mapRef;
  map: any;
  constructor() { }

  ngOnInit() {

  }


  showMap(){
    const location = new google.maps.Latlng(41.015137,	28.979530);
    const options: google.maps.MapOptions = {
      center: location,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);

    const  marker: google.maps.Marker = new google.maps.Marker({
      map: this.map,
      position: location,
    });
  }

  ngAfterViewInit(): void {
    this.showMap();
  }



}
