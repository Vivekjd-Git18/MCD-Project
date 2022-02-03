import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {

  @Output() parentFun2:EventEmitter<Boolean>= new EventEmitter<Boolean>();
  constructor(private router:Router) { }
 ngOnInit(): void {
 }
 onLogOut(){
   localStorage.removeItem('token');
    this.router.navigate(['/home']);
 }
}