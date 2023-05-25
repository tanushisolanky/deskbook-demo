import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
private url:string = 'https';
  constructor(private _http :HttpClient) { 

  }

  postData(data:User){
    
    return this._http.post(`${this.url}`,data);
  }

}
