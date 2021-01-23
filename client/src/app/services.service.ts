import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
/*import { Router } from '@angular/router';*/

export interface ImageResults {
  Name: string;
}
@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  
  constructor(private http: HttpClient) { }
  getimage(){
    return this.http.get<any>
    ('http://localhost:5050/Images')
  }
  searchimages( name) {
    return this.http.get 
  (`http://localhost:5050/search'?name=${name}`)
  }
  sendimage(Image: FormData){
    return this.http.post
    ('http://localhost:5050/Images',Image)   
  }
 deleteimages( name) {
    return this.http.delete 
  ('http://localhost:5050/Images')
}
}
