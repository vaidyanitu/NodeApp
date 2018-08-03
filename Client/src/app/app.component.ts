import { Component, OnInit } from '@angular/core';
import{ Http,Response} from '@angular/http';
import { map } from "rxjs/operators";
import {User} from './models/user.model';
import {AuthUserService }from './services/authUser.service';
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  authUser:User=new User();

  constructor(private http:Http,private sharedUser:AuthUserService,
    private router: Router){
    
  }

  ngOnInit(){
    this.sharedUser.getUser().subscribe(x=>{
      this.authUser=x;
      this.sharedUser.setUser(this.authUser);
    });    
  }

  showGoogUnlink(){
    if(!this.authUser._id==undefined && !this.authUser.local.email==undefined && !this.authUser.google.token==undefined)
    return true;
    else
    return false;
  }
  showGoogConnect(){
    
    if(!this.authUser._id==undefined && !this.authUser.local.email==undefined){
      if(!this.authUser.google.token!==undefined)
      return true
      else 
      return false
    }
    else
    return false;
  }
  
}
