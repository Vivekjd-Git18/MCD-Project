import { Injectable } from '@angular/core';
import { BASEuri } from '../common/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
URL=BASEuri
  constructor(private http:HttpClient) { }

  postProduct(data:any){
    return this.http.post<any>(this.URL +'/ProductTables',data)
    .pipe(map((res:any)=>{
      return res
    }))
  }
  
  getAllProduct(){
    return this.http.get<any>(this.URL +'/ProductTables')
    .pipe(map((res:any)=>{
      return res
    }))
  }

  // getAllProducts():Observable<ProductsModal[]>{
  //   return this.http.get<ProductsModal[]>(this.URL+'/ProductTables');
  // }

  updateProduct(data:any,id:number){
    return this.http.put<any>(this.URL +'/ProductTables/'+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteProduct(id:number){
    return this.http.delete<any>(this.URL +'/ProductTables/'+id)
    .pipe(map((res:any)=>{
      return res
    }))
  }






  // getAllProducts():Observable<ProductsModal[]>{
  //   return this.http.get<ProductsModal[]>(this.URL+'/ProductTables');
  // }
  // getAllEmployee(): Observable<ProductsModal[]> {  
  //   return this.http.get<ProductsModal[]>(this.URL + '/ProductTables');  
  // }  
  // GetEmployees(){
  //   return this.http.get<any>(`${this.URL}ProductTables`)
  //   .pipe(map((res:any)=>{
  //     return res;
  //   }))
  // }

  // getAllProductById(productId:number):Observable<ProductsModal[]>{
  //   return this.http.get<ProductsModal[]>(this.URL+'/ProductTables'+productId);
  // }

  // createProducts(product:ProductsModal):Observable<ProductsModal>{
  //   const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
  //   return this.http.post<ProductsModal>(this.URL+'/AddProduct',product,httpOptions);
  // }
  // UpdateProducts(product:ProductsModal):Observable<ProductsModal>{
  //   const httpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
  //   return this.http.post<ProductsModal>(this.URL+'/AddProduct',product,httpOptions);
  // }

}
