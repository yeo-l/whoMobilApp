import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-parametrage',
  templateUrl: './parametrage.page.html',
  styleUrls: ['./parametrage.page.scss'],
})
export class ParametragePage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDataJsi();
  }
  getDataJsi(){
    this.http.get('https://dhis2.jsi.com/dhis/api/dataStore/qualitydashboard/settings')
        .subscribe(res =>{
          console.log('jsiData', res);
        });
  }
}
