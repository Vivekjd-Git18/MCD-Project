import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductsModal } from '../../Modals/products-modal';
import { AdminServiceService } from '../../services/admin-service.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  product_Form!: FormGroup;
  productData:any;
  productsObj: ProductsModal = new ProductsModal();
  allProducts!: ProductsModal[];
  showUpdateButton!:boolean;
  showAddButton!:boolean;


  constructor(private fb: FormBuilder,
     private ProductApi:AdminServiceService) {}

  ngOnInit(): void {
    this.product_Form = this.fb.group({
      name: [''],
      desc: [''],
      category: [''],
      price: [''],
      calorie: [''],
      productImage: [''],
    });
  }

  addButton(){
    this.product_Form.reset()
    this.showUpdateButton=false
    this.showAddButton=true
  }


  postProduct(){
    this.productsObj.name=this.product_Form.value.name;
    this.productsObj.productDescription=this.product_Form.value.desc;
    this.productsObj.categoryImage=this.product_Form.value.category;
    this.productsObj.price=this.product_Form.value.price;
    this.productsObj.calories=this.product_Form.value.calorie;
    this.productsObj.productImage=this.product_Form.value.productImage;

    this.ProductApi.postProduct(this.productsObj)
    .subscribe(res=>{
      console.log(res);
      alert("Product added");
      this.product_Form.reset();
      let cancel = document.getElementById('close');
      // cancel?.click();
      cancel?.click();      
      this.getProducts();
    },
    err=>{
     alert("Something went wrong") 
    })

  }
  getProducts(){
    this.ProductApi.getAllProduct()
    .subscribe(res=>{
      this.productData=res;
    }) 
  }

  deleteProduct(row:any){
    this.ProductApi.deleteProduct(row.productId)
    .subscribe(res=>{
      alert(`Product ${row.name} is deleted`);
    })
}
  editProduct(row:any){
    this.showUpdateButton=true
    this.showAddButton=false

    this.productsObj.productId=row.productId;
    this.product_Form.controls['name'].setValue(row.name);
    this.product_Form.controls['desc'].setValue(row.productDescription);
    this.product_Form.controls['category'].setValue(row.categoryImage);
    this.product_Form.controls['price'].setValue(row.price);
    this.product_Form.controls['calorie'].setValue(row.calories);
    this.product_Form.controls['productImage'].setValue(row.productImage);
  }



  updateProduct(){
    this.productsObj.name=this.product_Form.value.name;
    this.productsObj.productDescription=this.product_Form.value.desc;
    this.productsObj.categoryImage=this.product_Form.value.category;
    this.productsObj.price=this.product_Form.value.price;
    this.productsObj.calories=this.product_Form.value.calorie;
    this.productsObj.productImage=this.product_Form.value.productImage;

    this.ProductApi.updateProduct(this.productsObj,this.productsObj.productId)
    .subscribe(res=>{
      alert("product details updated successfully ");
      this.product_Form.reset();
      let cancel = document.getElementById('close');
      // cancel?.click();
      cancel?.click();      
      this.getProducts();
    })
  }


  
}
