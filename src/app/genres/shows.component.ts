import { Component, OnInit } from '@angular/core';
import { Shows } from './shows';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environment/environment';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent implements OnInit {
  public shows!: Shows[];
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');
    let url = environment.baseUrl + `api/Genres/Shows/${idParam}`;
    this.http.get<Shows[]>(url).subscribe(result => {
      this.shows = result;
    })
  }
}
