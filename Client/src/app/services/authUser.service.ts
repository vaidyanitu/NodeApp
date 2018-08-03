import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import {Http} from '@angular/http';
import { User } from '../models/user.model';
import {map} from 'rxjs/operators';
import { debug } from 'util';

@Injectable()
export class AuthUserService implements OnInit{
    authUser:User;
constructor(private http:Http){
    this.getUser().subscribe(x=>{
        this.authUser=x;       
      });    
}

ngOnInit(){        
    
}

    getUser(){     
        return this.http.get('/authenticate')
        .pipe(map(res=>res.json()))
    }

    setUser(user:User){
        this.authUser=user;
    }
}