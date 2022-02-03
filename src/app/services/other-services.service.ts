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
  

  



  
  // msg!:string
  // dataShow(){
  //   return this.data
  // }
  // msgChange(_msg: string){
  //   this.msg=_msg
  // }
  // msgShow(){
  //   return this.msg
  // }
}
