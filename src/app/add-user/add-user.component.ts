import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { user_class } from '../user/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor(private _user:UserService,private user:user_class) { }
onSave()
{

}
  ngOnInit() {
  }

}
