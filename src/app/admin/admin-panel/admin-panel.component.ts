import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Component, OnInit, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OffersModal } from 'src/app/Modals/offer-modal';
import { ProductsModal } from '../../Modals/products-modal';
import { AdminServiceService } from '../../services/admin-service.service';
import { ProductsService } from '../../services/products.service';
import { OffersService } from '../../services/offers.service';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  product_Form!: FormGroup;
  offer_Form!:FormGroup;
  productData!:any;
  offerdata!:any;
  productsObj: ProductsModal = new ProductsModal();
  offerObj: OffersModal = new OffersModal();
  allProducts!: ProductsModal[];
  allOffers!: OffersModal[];
  showUpdateButton!: boolean;
  showAddButton!: boolean;
  OffershowAddButton!:boolean;
  OffershowUpdateButton!:boolean;
  cat = '';
  showProduct:boolean=false;
  showOffers:boolean=false;
  closeWindowButton:boolean=false;

  get f() {
    return this.product_Form.controls;
  }
  CloseWin(){
    this.showProduct=false;
    this.showOffers=false;  
  }

  varcatogory_val: any;
  showcat(e: any) {
    console.log(e.target.value);

    //logic for catogary vise value for category image
    var catval1 = e.target.value;
    if (catval1 == 'veg') {
      console.log(catval1);
      this.varcatogory_val =
        'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/Veg.svg';
    } else {
      console.log(catval1);
      this.varcatogory_val =
        'https://images.mcdelivery.co.in/hardcastle-restaurants-pvt-ltd/image/upload/v1591261933/NewWebsiteResource2020/Assets/Img/nonveg.svg';
    }
  }

  constructor(
    private fb: FormBuilder,
    private ProductApi: AdminServiceService,
    private offerApi:OffersService
  ) {}

  ngOnInit(): void {
    this.product_Form = this.fb.group({
      name: [''],
      desc: [''],
      category: ['', Validators.required],
      price: [''],
      calorie: [''],
      category_id:[''],
      productImage: [''],
      Product_Type:['']
    });


    this.offer_Form = this.fb.group({
      name: ['',Validators.required],
      desc1: ['',Validators.required],
      desc2: [''],
      Offer_code: ['', Validators.required]
    });
  }

  addButton() {
    this.product_Form.reset();
    this.showUpdateButton = false;
    this.showAddButton = true;
  }
  addOfferButton(){
    this.offer_Form.reset();
    this.OffershowAddButton=false;
    this.OffershowUpdateButton=true;
  }

  postProduct() {
    this.productsObj.name = this.product_Form.value.name;
    this.productsObj.productDescription = this.product_Form.value.desc;
    this.productsObj.categoryImage = this.varcatogory_val;
    this.productsObj.price = this.product_Form.value.price;
    this.productsObj.calories = this.product_Form.value.calorie;
    this.productsObj.productImage = this.product_Form.value.productImage;
    this.productsObj.Product_Type = this.product_Form.value.Product_Type;
    this.productsObj.category_id = this.product_Form.value.category_id;
    

    this.ProductApi.postProduct(this.productsObj).subscribe(
      (res) => {
        console.log(res);
        alert('Product added');
        this.product_Form.reset();
        let cancel = document.getElementById('close');
        // cancel?.click();
        cancel?.click();
        this.getProducts();
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }

  filterProduct($event:any){
    this.productData.filter = $event.target.value;
  }
  searchProduct!:any
  searchOffer!:any

  getProducts() {
    this.showProduct=true
    this.closeWindowButton=true;
    this.ProductApi.getAllProduct().subscribe((res) => {
      this.productData = res;
    });
  }

  deleteProduct(row: any) {
    this.ProductApi.deleteProduct(row.productId).subscribe((res) => {
      alert(`Product ${row.name} is deleted`);
    });
  }
  editProduct(row: any) {
    this.showUpdateButton = true;
    this.showAddButton = false;

    this.productsObj.productId = row.productId;
    this.product_Form.controls['name'].setValue(row.name);
    this.product_Form.controls['desc'].setValue(row.productDescription);
    this.product_Form.controls['category'].setValue(row.categoryImage);
    this.product_Form.controls['price'].setValue(row.price);
    this.product_Form.controls['calorie'].setValue(row.calories);
    this.product_Form.controls['productImage'].setValue(row.productImage);
    this.product_Form.controls['Product_Type'].setValue(row.Product_Type);
    this.product_Form.controls['category_id'].setValue(row.category_id);
  }

  updateProduct() {
    this.productsObj.name = this.product_Form.value.name;
    this.productsObj.productDescription = this.product_Form.value.desc;
    this.productsObj.categoryImage = this.product_Form.value.category;
    this.productsObj.price = this.product_Form.value.price;
    this.productsObj.calories = this.product_Form.value.calorie;
    this.productsObj.productImage = this.product_Form.value.productImage;
    this.productsObj.Product_Type = this.product_Form.value.Product_Type;
    this.productsObj.category_id = this.product_Form.value.category_id;
    

    this.ProductApi.updateProduct(
      this.productsObj,
      this.productsObj.productId
    ).subscribe((res) => {
      alert('product details updated successfully ');
      this.product_Form.reset();
      let cancel = document.getElementById('close');
      cancel?.click();
      this.getProducts();
    });
  }













  // for offers
  postOffers() {
    this.offerObj.name = this.offer_Form.value.name;
    this.offerObj.desc1 = this.offer_Form.value.desc1;
    this.offerObj.desc2 = this.offer_Form.value.desc2;
    this.offerObj.Offer_code = this.offer_Form.value.Offer_code;

    this.offerApi.postOffers(this.offerObj).subscribe(
      (res) => {
        console.log(res);
        alert('Offer added');
        this.offer_Form.reset();
        let cancel = document.getElementById('close');
        // cancel?.click();
        cancel?.click();
        this.getOffers();
      },
      (err) => {
        alert('Something went wrong');
      }
    );
  }
  getOffers() {
    this.showOffers=true;
    this.offerApi.getAllOffers().subscribe((res) => {
      this.offerdata = res;
    });
  }

  deleteOffers(row: any) {
    this.offerApi.deleteOffers(row.offer_id).subscribe((res) => {
      alert(`Offer ${row.name} is deleted`);
    });
  }
  editOffers(row: any) {
    // this.showUpdateButton = true;
    // this.showAddButton = false;

    this.offerObj.offerid = row.offer_Id;
    this.product_Form.controls['name'].setValue(row.name);
    this.product_Form.controls['desc1'].setValue(row.desc1);
    this.product_Form.controls['desc2'].setValue(row.desc2);
    this.product_Form.controls['Offer_code'].setValue(row.Offer_code);
  }


  updateOffers() {
    this.offerObj.name = this.offer_Form.value.name;
    this.offerObj.name = this.offer_Form.value.name;
    this.offerObj.desc1 = this.offer_Form.value.desc1;
    this.offerObj.desc2 = this.offer_Form.value.desc2;
    this.offerObj.Offer_code = this.offer_Form.value.Offer_code;

    this.offerApi.updateOffers(
      this.offerObj,
      this.offerObj.offerid
    ).subscribe((res) => {
      alert('offers details updated successfully ');
      this.offer_Form.reset();
      let cancel = document.getElementById('close');
      cancel?.click();
      this.getOffers();
    });
  }





}
