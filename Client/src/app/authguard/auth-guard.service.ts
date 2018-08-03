import { Injectable } from '@angular/core';
import { Router, CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import {AuthUserService} from '../services/authUser.service';
import {User} from '../models/user.model';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthGuardService implements CanActivate {
  User:any;
  constructor( public router: Router,private authUser:AuthUserService) {
      
  }
  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
      debugger;
      return this.authUser.getUser().pipe(map(x=>{
          if(x){
            return true;
          }           
          else{
          this.router.navigate(['home']);
          return false;
          }                
        }));
  }

}
