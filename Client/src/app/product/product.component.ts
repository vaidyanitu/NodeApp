import { Component, OnInit, TemplateRef } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Category}from '../models/product.model';
import {map} from 'rxjs/operators';
import {BsModalService} from 'ngx-bootstrap/modal';
import {BsModalRef} from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Router} from '@angular/router';
import { trigger,style,transition,animate,keyframes,query,stagger, state } from '@angular/animations';


@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  animations:[
    trigger('someCoolAnimation',[      
      transition('*=>fadeIn',[
        style({opacity:0}),
        animate(1000,style({opacity:1}))
      ]),
      transition('*=>fadeOut',[
        animate(1000,style({opacity:0}))
      ])
    ]),
    trigger('itemState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ProductComponent implements OnInit {
  cat:Category=new Category();
  modalRef:BsModalRef;
  state:string='inactive'

  
  constructor(private productservice:ProductsService,
    private router:Router,
    private modalService:BsModalService) {   
    debugger;
    this.getData().subscribe(x=>{
      console.log(x);
      this.cat=x;
    });
   }

   toggleState(item:Category) {
     debugger;
    item.state = item.state === 'active' ? 'inactive' : 'active';
  }

  ngOnInit() {
  }

  openModal(template:TemplateRef<any>,val:Category){
    debugger;        
    const initialState={
      name:val?val.name:'',
      id:val?val._id:''
    }
    this.modalRef=this.modalService.show(template,{initialState});
  }

  addCat(cname:string){
    debugger;
    var a:Category=new Category();
    a.name=cname;
  this.productservice.addData(a,'/api/category')
      .subscribe(res=>{
        console.log(res);
        this.getData().subscribe(x=>{
          console.log(x);          
          this.cat=x;
          this.modalRef.hide();
        });
      },
    (err)=>{
      console.log('Error ',err);
    });
}


deleteCat(cid:string){
  debugger;
  var result=confirm("Are you sure you want to delete this?");
    if(result){        
    this.productservice.delData(cid,'/api/category')
    .subscribe(res=>{
      this.getData().subscribe(x=>{
        this.cat=x;
        return false;
      });
    },
    (err)=>{
      console.log('Error ', err);
    });
    }    
}


editCat(cid:string,name:string){
  debugger;
  var cat=new Category();
  cat.name=name;
  cat._id=cid;
this.productservice.editData(cid,'/api/category/', cat)
.subscribe(res=>{
  this.getData().subscribe(x=>{
    this.cat=x;
    this.modalRef.hide();
  });
},
(err)=>{
  console.log('Error ', err);
});
}    

getData(){
  return this.productservice.getData("api/category").pipe(map(x=>x.json()));
}



test(){
  var a:Category=new Category();
    a.name="TestObject";
  this.productservice.addData(a,'/api/category')
      .subscribe(res=>{
        console.log(res);
        this.getData().subscribe(x=>{
          console.log(x);
          this.cat=x;
        });
      },
    (err)=>{
      console.log('Error ',err);
    });
}

}