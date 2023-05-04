import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from '../environment/environment';
import { Genre } from './genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent {
  public genres!: Genre[];
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    let url = environment.baseUrl + 'api/Genres';
    this.http.get<Genre[]>(url).subscribe(result => {
      this.genres = result;
    });
  }
}
