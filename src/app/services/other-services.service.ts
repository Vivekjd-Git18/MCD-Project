import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OtherServicesService {
private message = new BehaviorSubject<string>("default");
currentMsg = this.message.asObservable();

private bol = new BehaviorSubject<boolean>(false);
currentstat = this.bol.asObservable();

// this.Oservice.currentMsg.subscribe(msg=>this.message=msg)
launch(msg:string){
  this.message.next(msg)
}
launchBool(stat:boolean){
  this.bol.next(stat)
}
  data!:boolean
  constructor() { }
  
  dataChange(_data:boolean){
    this.data=_data
  }
  
getToken():string|null{
  return localStorage.getItem('token')
}

  isLoggedIn(){
    return this.getToken()!=null;
  }

  // private SerachPro = new BehaviorSubject<string>('a');
  // current = this.SerachPro.asObservable();

  // RefreshSearch(text:string){
  //   this.SerachPro.next(text)
  // }
msg!:string
  setSearch(data:any){
      this.msg=data;
  }
  getSeacrh(){
    return this.msg
  }

}
