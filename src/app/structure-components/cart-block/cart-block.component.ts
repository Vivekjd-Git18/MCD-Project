import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsModal } from 'src/app/Modals/products-modal';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-cart-block',
  templateUrl: './cart-block.component.html',
  styleUrls: ['./cart-block.component.css']
})
export class CartBlockComponent implements OnInit {
  // allProducts!: Observable<ProductsModal[]>; 
allProducts:any;
  
  students:any;
  // student1:any={"id":6,"name":"suraj"};     

  constructor(private ProductsService:ProductsService) { }

  ngOnInit(): void {

   this.loadAllProducts()
   
  }
  
  // loadAllProducts() {  
  //   this.allProducts = this.ProductsService.getAllProducts();  
  // }
  loadAllProducts(){
  // this.ProductsService.getAllProducts().subscribe(data=>this.allProducts=data);
  // this.allProducts=this.ProductsService.getAllProducts();
  // console.log(this.allProducts)
    this.ProductsService.getAllProducts()
    .subscribe({
      next:res=>{console.log(res);this.allProducts=res;},
      error:err=>console.error(err)
    })
}



}