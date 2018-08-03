import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import{Category} from '../models/product.model'; 
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
Cat:Category;
  constructor(private http:Http) { 

  }

  getData(objName:string){
      debugger;
      return this.http.get('/'+objName);
      //.pipe(map(res=>res.json()));
  }

  addData(obj:Category,urlroute:string){
    debugger;
    return this.http.post(urlroute,obj).pipe(map(x=>x.json()));
  }
}
