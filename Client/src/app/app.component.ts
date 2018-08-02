import { Component } from '@angular/core';
import{ Http,Response} from '@angular/http';
import { map } from "rxjs/operators";
import {User} from './user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  authUser:User={} as User;

  constructor(private http:Http){
    debugger;
    this.http.get('/authenticate')
    .pipe(map(res=>res.json()))
    .subscribe((res:User)=>{      
      this.authUser=res;
    });
  }
  
}
