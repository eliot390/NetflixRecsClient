import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public data: NetflixData[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<NetflixData[]>(environment.baseUrl + 'NetflixData').subscribe(result => {
      this.data = result;
    }, error => console.error(error));
  }
}

interface NetflixData {
  TITLE: string;
  GENRE: string;
  SCORE: number;
  VOTES: number;
}