import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { ProductsModal } from '../Modals/products-modal';
import { BASEuri} from '../common/common';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // https://localhost:44321/api/ProductTables
  URL=BASEuri;

  constructor(private http:HttpClient) {}

  // getAllProducts():Observable<any>{
  //   return this.http.get(this.URL+'/ProductTables').pipe(map(res=>{
  //     return res;
  //   }))
  // }
  getAllProducts():Observable<ProductsModal[]>{
    return this.http.get<ProductsModal[]>(this.URL+'/ProductTables');
  }
  // getAllEmployee(): Observable<ProductsModal[]> {  
  //   return this.http.get<ProductsModal[]>(this.URL + '/ProductTables');  
  // }  
  // GetEmployees(){
  //   return this.http.get<any>(`${this.URL}ProductTables`)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  getAllProductById(productId:number):Observable<ProductsModal[]>{
    return this.http.get<ProductsModal[]>(this.URL+'/ProductTables'+productId);
  }

  createProducts(product:ProductsModal):Observable<ProductsModal>{
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<ProductsModal>(this.URL+'/AddProduct',product,httpOptions);
  }
  UpdateProducts(product:ProductsModal):Observable<ProductsModal>{
    const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<ProductsModal>(this.URL+'/AddProduct',product,httpOptions);
  }

}




