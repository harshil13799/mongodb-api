import { Injectable, Inject } from '@angular/core';
import {HttpClient,HttpHeaders}from '@angular/common/http';
import{user_class}from '../app/user/user';
import{user1_class}from '../app/user1';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string="http://Localhost:3000/practice";
  private url1:string="http://Localhost:3000/practice/";
  user:user_class[];
  constructor(private _http:HttpClient) { }

  getuser()
  {
    return this._http.get(this.url);
  }
  adduser(item:user_class)
  {
     let body=JSON.stringify(item);
     let head1=new HttpHeaders().set('Content-Type','application/json');
   return this._http.post(this.url,body,{headers:head1});

  }
  delete_user(item:user_class)
  {
    // let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.delete(this.url1 + `/${item._id}`);
  }
  updateUser(item:user_class){
    let body=JSON.stringify(item);
    let head1=new HttpHeaders().set('Content-Type','application/json');
    return this._http.put(this.url1+item._id,body,{headers:head1});
  }
  getuserById(_id:string){
    return this._http.get(this.url1+_id);
  }


}
