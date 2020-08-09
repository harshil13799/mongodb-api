import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router , ActivatedRoute} from '@angular/router';
import { UserService } from '../user.service';
import{user_class}from '../user/user';
import {user1_class}from '../user1';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

 constructor(private _r:Router,private _user:UserService) { }
  user_arr:user_class[]=[];
  user1_arr:user1_class[]=[];

  onadd(x,y,z){
    this._user.adduser(new user_class(x,y,z)).subscribe(
      (data:any)=>{
        console.log(data);
        this.user_arr.push(new user_class(x,y,z));
      }
    );
  }
  onDelete(i)
  {
    this._user.delete_user(i).subscribe(
      (data:any)=>{
        this.user_arr.splice(this.user_arr.indexOf(i),1);
        console.log("hii");
      }
    );
  }
  onUpdate(item:user_class)
  {
    this._r.navigate(['/updateuser',item._id]);
  }


  ngOnInit() {
    this._user.getuser().subscribe(
      (data:any[])=>{
        this.user_arr=data;
        console.log(data);
      }
    );
  }


}


