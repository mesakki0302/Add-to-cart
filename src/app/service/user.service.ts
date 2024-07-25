import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  
getdata(data:any){
  return this.http.post<any>("http://localhost:3000/login",data).pipe(map((result:any)=>{
   return result;
  }))
}

  getuser(data:any){
    return this.http.post<any>("http://localhost:3000/User",data).pipe(map((res:any)=>{
      return res;
     }))
   }
}
