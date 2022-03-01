import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient ) { }

  search(searchText:any){
    const url = `https://api.github.com/users/${searchText}`
    return this.http.get(url)
  }
}