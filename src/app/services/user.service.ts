import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BASEuri } from '../common/common';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  BASEurl = BASEuri;
  router: any;
  constructor(private http: HttpClient, private toast: ToastrService) {}

  login(formdata:any) {
    return this.http.post(this.BASEurl + '/ApplicationUser/Login', formdata);
  }

}
