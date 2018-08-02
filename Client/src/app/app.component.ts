import { Component, OnInit } from '@angular/core';
import{ Http,Response} from '@angular/http';
import { map } from "rxjs/operators";
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  authUser:User={} as User;

  constructor(private http:Http){
    
  }

  ngOnInit(){
    debugger;
    this.http.get('/authenticate')
    .pipe(map(res=>res.json()))
    .subscribe((res:User)=>{      
      this.authUser=res;
    });
  }

  showGoogUnlink(){
    console.log(this.authUser);
    if(this.authUser._id &&this.authUser.local.email && this.authUser.google.token)
    return true;
    else
    return false;
  }
  showGoogConnect(){
    
    if(this.authUser._id && this.authUser.local.email){
      debugger;
      if(!this.authUser.google.token)
      return true
      else 
      return false
    }
    else
    return false;
  }
  
}
