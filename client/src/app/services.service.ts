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
  searchimages(search : ImageResults ) {
  
    return this.http.post
    <{
      success : boolean,
       msg : string
    }>
  ('http://localhost:5050/search', search)
  }
}
