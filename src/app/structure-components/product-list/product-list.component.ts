import { Component, Input, OnInit, DoCheck } from '@angular/core';
import { Subscription } from 'rxjs';
import { OtherServicesService } from 'src/app/services/other-services.service';
import { ProductsService } from '../../services/products.service';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
@Input() Keyword!:string;


  allProducts:any;
  constructor(private ProductsService:ProductsService,private Oservice:OtherServicesService){  }

newdata!:boolean;
newdata2!:boolean;


searchProduct!:string;
  ngOnInit(): void {
    this.loadAllProducts();
    this.Oservice.currentstat.subscribe(stat=>this.newdata=stat); 
    this.Oservice.currentstat.subscribe(stat=>this.newdata2=stat); 
    // this.refresh()
    this.searchProduct = this.Oservice.getSeacrh()
    console.log(this.newdata)
    console.log(this.newdata2)
  }

loadAllProducts(){
    this.ProductsService.getAllProducts()
    .subscribe({
      next:res=>{
        console.log(res);
        this.allProducts=res;        
      },
      error:err=>console.error(err)
    })
}




}
 
