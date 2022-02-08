import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  userDetails!:any
  constructor(
    private Userservice:UserService
  ) { }

  ngOnInit(): void {
    this.Userservice.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
      },
      err=>{
        console.log(err)
      }
    )
  }

}
