import { Component, OnInit } from '@angular/core';
import { Shows } from '../shows';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/app/environment/environment';

@Component({
  selector: 'app-add-show',
  templateUrl: './add-show.component.html',
  styleUrls: ['./add-show.component.css']
})
export class AddShowComponent implements OnInit {
  show? : Shows;
  form!: FormGroup;
  id?: number;

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {       
    this.form = new FormGroup({
      title: new FormControl(''),
      score: new FormControl(''),
      votes: new FormControl('')
    });
    this.loadData();
  }

  loadData() {
    let idParam = this.activatedRoute.snapshot.paramMap.get('id');       
      let url = environment.baseUrl + `api/Shows/${idParam}`;
      this.http.get<Shows>(url).subscribe(result => {
        this.show = result;
        this.form.patchValue(this.show);
    })
  }

  onSubmit() {
    var show = (this.id) ? this.show : <Shows>{};
    if (show) {
      show.title = this.form.controls['title'].value;
      show.score = +this.form.controls['score'].value;
      show.votes = +this.form.controls['votes'].value;

      // if (this.id) {
      //   // EDIT mode
      //   var url = environment.baseUrl + 'api/Shows/' + show.id;
      //   this.http
      //     .put<Shows>(url, show)
      //     .subscribe(result => {
      //       console.log("show " + show!.id + " has been updated.");
      //       // go back to cities view
      //       this.router.navigate(['/genres']);
      //   }, error => console.error(error));
      // }
      // else {
        // ADD NEW mode
        var url = environment.baseUrl + 'api/Shows';
        this.http
          .post<Shows>(url, show)
          .subscribe(result => {
            console.log("show " + result.id + " has been created.");
            // go back to cities view
            this.router.navigate(['/shows', show?.genreID]);
        }, error => console.error(error));
      }
    }
  //}

}
