import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import{user_class} from '../user/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
 _id:string;
 x:string;
  name:string;
   age:number;
 country : string;
 onSave()
 {
  this._user.updateUser(new user_class(this.name,this.age,this.country,this._id)).subscribe(
    (data:any)=>{
      console.log(data);
       this._route.navigate(['/']);
    }
  );

 }

  constructor(private _route:Router,private _acrouter:ActivatedRoute,private _user:UserService) { }

  ngOnInit() {
    this.x=this._acrouter.snapshot.params['_id'];
    this._user.getuserById(this.x).subscribe(
      (data:user_class[])=>{
        this._id=data[0]._id;
        this.name=data[0].name;
        this.age=data[0].age;
        this.country=data[0].country;
      }
    );



  }

}
