import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, throwError } from 'rxjs';
import { IUser} from '../shared classes/IUser';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  _url:string = "https://jsonplaceholder.typicode.com/users"

  constructor(private http:HttpClient) { }

  GetAllUsers():Observable<IUser[]> { 

    return this.http.get<IUser[]>(this._url).pipe(catchError((err) => {
      return throwError(()=>err.message || "server error");
    }));
  
  }

}

