import { Component, OnInit } from '@angular/core';
import { OtherServicesService } from 'src/app/services/other-services.service';
import product_data from '../../assets/data/data.json';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // allProducts!: Observable<ProductsModal[]>; 
  allProducts:any;
  constructor(private ProductsService:ProductsService,private Oservice:OtherServicesService){  }

newdata!:boolean;

  ngOnInit(): void {
    this.loadAllProducts();
    this.Oservice.currentstat.subscribe(stat=>this.newdata=stat); 
    // console.log(this.newdata);console.log("this is message"+this.msg)
  }

// public ProList:{img:any,img_cat:any,title:string,desc:string}[] = product_data;

loadAllProducts(){
    this.ProductsService.getAllProducts()
    .subscribe({
      next:res=>{console.log(res);this.allProducts=res;},
      error:err=>console.error(err)
    })
}
}








// import countries from './_files/countries.json';
import { BehaviorSubject } from 'rxjs';
 
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'json-file-read-angular';
//   public countryList:{name:string, code:string}[] = countries;
// }
 
