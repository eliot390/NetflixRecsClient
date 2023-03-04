import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html',
  styleUrls: ['./fetch-data.component.css']
})
export class FetchDataComponent {
  public data: NetflixData[] = [
    {
      "TITLE": "Breaking Bad",
      "SCORE": 9.5,
      "VOTES": 1727694,      
      "GENRE": "drama",      
     },
     {
      "TITLE": "Avatar: The Last Airbender",
      "SCORE": 9.3,
      "VOTES": 297336,
      "GENRE": "scifi",
     },
     {
      "TITLE": "Our Planet",
      "SCORE": 9.3,
      "VOTES": 41386,
      "GENRE": "documentary",
     },
     {
      "TITLE": "Kota Factory",
      "SCORE": 9.3,
      "VOTES": 66985,
      "GENRE": "drama",
     },
     {
      "TITLE": "The Last Dance",
      "SCORE": 9.1,
      "VOTES": 108321,
      "GENRE": "documentary",
     },
     {
      "TITLE": "Arcane",
      "SCORE": 9.1,
      "VOTES": 175412,
      "GENRE": "action",
     },
     {
      "TITLE": "Attack on Titan",
      "SCORE": 9,
      "VOTES": 325381,
      "GENRE": "scifi",
     },
     {
      "TITLE": "Hunter x Hunter",
      "SCORE": 9,
      "VOTES": 87857,
      "GENRE": "drama",
     }
  ];

  // constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //   http.get<NetflixData[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //     this.data = result;
  //   }, error => console.error(error));
  // }
}

interface NetflixData {
  TITLE: string;
  GENRE: string;
  SCORE: number;
  VOTES: number;
}