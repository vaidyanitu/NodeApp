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
    debugger;
    if(this.authUser._id && this.authUser.local){
      if(this.authUser.local.email && this.authUser.google){
        if(this.authUser.google.token){
          return true;
        }
      }      
    }    
    else
    return false;
  }


  showGoogConnect(){
    debugger;
    if(this.authUser._id && this.authUser.local){
      if(this.authUser.local.email){
        if(!this.authUser.google){
          return true;
        }
        else if (this.authUser.google){
          if(!this.authUser.google.token){
            return true;
          }
          // return false;
        }
        // return false;
      }      
//else 
      // return false
    }
    else
    return false;
  } 
  
}
