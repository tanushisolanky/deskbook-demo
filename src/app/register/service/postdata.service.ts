import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user-register.model';

@Injectable({
  providedIn: 'root'
})
export class PostdataService {
private url:string = environment.authority_register_uri;
  constructor(private _http :HttpClient) { 

  }

  postData(data:User){
    const body = {
      firstName:data.firstName,
      lastName:data.lastName,
      emailId:data.email,
      password:data.password
    }
    console.log(body.emailId);
    
    return this._http.post(`${this.url}/users`,body);
  }

}
