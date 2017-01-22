import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GitHubService{
  private username:string;
  private client_id = '3221caee93470ed87637';
  private client_sercert = 'b4d848842d5641ac8d4dd440bc90688e4f134980';

  constructor(private _http: Http) {
    console.log('Github Service Ready...');
    this.username = 'bahr2772';
  }

    getUser(){
      return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+"&client_secret="+this.client_sercert)
        .map(res => res.json());

  }


}
