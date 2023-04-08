import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { IPost } from '../shared classes/IPosts';
@Injectable({
  providedIn: 'root'
})
export class PostServicesService {

  _url:string = "https://jsonplaceholder.typicode.com/posts"

  constructor(private http:HttpClient) { }

  GetAllPosts():Observable<IPost[]> { 

    return this.http.get<IPost[]>(this._url).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));
  
  }


}
