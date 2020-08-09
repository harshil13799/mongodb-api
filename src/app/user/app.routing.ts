import { Routes,RouterModule } from '@angular/router';
import {UserComponent}from '../user/user.component';
import{UpdateUserComponent}from '../update-user/update-user.component';
import {MenuComponent} from '../menu/menu.component'
import { from } from 'rxjs';
const arr:Routes=[

  {path:'',component:UserComponent},
  {path:'updateuser/:_id',component:UpdateUserComponent},


];
export const routing=RouterModule.forRoot(arr)
