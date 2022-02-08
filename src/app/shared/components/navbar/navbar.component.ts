import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient} from "@angular/common/http"
import { ToastrService} from "ngx-toastr"
import { BASEuri} from "../../../common/common"
import { Router } from '@angular/router';

import { NgModel} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { OtherServicesService } from '../../../services/other-services.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css','../../css/css/owl.carousel.min.css',
  '../../css/css/owl.theme.default.min.css','../../css/css/style.css']
})
export class NavbarComponent implements OnInit {

  @Output() parentFun:EventEmitter<Boolean>= new EventEmitter<Boolean>();
  
  BASEurl=BASEuri;
  showLoginButton!:boolean

  //login stuff starts
  Login_formModel = {
    username:'',
    password:''
  }
  userDetails!:any;

  // Login_formModel = this.fb.group({
  //   username:['',Validators.required],
  //   password:['',[Validators.required,Validators.minLength(3)]],
  // });

  login(formdata:any){
    return this.http.post(this.BASEurl+'/ApplicationUser/Login',formdata);

  }

  onSubmitLogin(form:NgForm){
    this.Userservice.login(form.value).subscribe(
      (res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigateByUrl('/home2');
        alert("logged in")
      },
      err=>{
        if(err.status == 400){
          this.toast.error('incorrect username or password','Authentication failed');
        }
        else{
          console.log(err);
        }
      }
      );
  }

  //login stuff ends




  // validatingForm!: FormGroup;
// myform:FormGroup | undefined
constructor(private modalService: NgbModal, 
            private fb:FormBuilder,
            private http:HttpClient,
            private toast:ToastrService,
            private router:Router,
            private Userservice:UserService,
            private other:OtherServicesService) {}
  searchProduct!:string
  ngOnInit(){
    this.Reg_formModel.reset();

    if (this.other.isLoggedIn()) {
      this.showLoginButton=false;

    }
    this.Userservice.getUserProfile().subscribe(
      res=>{
        this.userDetails=res;
      },
      err=>{
        console.log(err)
      }
    )
    this.other.setSearch(this.searchProduct)
  }

  changePage(){
    this.parentFun.emit(this.data);
  }
  
  // get loginFormModalEmail() {
  //   return this.Login_formModel.get('loginFormModalEmail');
  // }
  
  // get loginFormModalPassword() {
  //   return this.Login_formModel.get('loginFormModalPassword');
  // }
  
  



Reg_formModel = this.fb.group({
  email:['',[Validators.email,Validators.email]],
  phone:['',[Validators.required,Validators.minLength(10)]],
  username:['',[Validators.required,Validators.minLength(2)]],
  password:['',[Validators.required,Validators.minLength(3)]],
  confirm_password:['',[Validators.required]]},
  {
    Validator:this.check('password','confirm_password')}
)
 
get f(){
  return this.Reg_formModel.controls;
}

check(p1:string,p2:string){
  return(fb:FormGroup)=>{
    const control = fb.controls[p1];
    const control2 = fb.controls[p2];

    if(control2.errors && !control2.errors['check']){
      return
    }
    if(control.value!==control2.value)
    {
      control2.setErrors({check:true})
    }
    else{
      control2.setErrors(null);
    }
  }
}

register(){
  var body={
    Email: this.Reg_formModel.value.email,
    pwd: this.Reg_formModel.value.password,
    name: this.Reg_formModel.value.username,
    PhoneNumber: this.Reg_formModel.value.phone,
  };
  return this.http.post(this.BASEurl+'/ApplicationUser/Register',body);
}
toast1(){
  this.toast.success('New User Created.!',  'Registration Successfull');
}

onSubmit(){
  console.log("registration clicked");

  this.register().subscribe(
    (res:any)=>{
      if(res.succeeded){
        this.Reg_formModel.reset();
        this.toast.success('New User Created.!', 'Registration Successfull');
        console.log("registered");
        alert("registered")
      }
      else{
        res.errors.forEach((element: { code: any,description:any }) => {
          switch(element.code){
            case 'DuplicateUserName':
            this.toast.error('username is already taken','Registration Failed');
              //username is already taken
              break;
            default:
              //registration failed
            this.toast.error(element.description,'Registration Failed');
              break;
            }
          });
        }
      },
      err=>{
        console.log(err);
      }
      );
    }
    
    
    
    
    
    data:Boolean=false;
        
    closeResult = '';
    open(content: any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result: any) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason: any) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    
    formChoice:boolean=true;
    
    changeToSignup(){
      this.formChoice=true;
    }
    
    changeToLogin(){
      this.formChoice=false;
    }
  }
  
  
  // comparePass(fb:FormGroup){
  //   let cnf = fb.get('confirm_password');
  //   //passMiss
  //   // cnf.errors={passMiss:true}
  //   if(cnf?.errors==null||'passMiss'in cnf.errors){
  //     if(fb.get('password')?.value!=cnf?.value){
  //       cnf?.setErrors({passMiss:true});
  //     }
  //     else
  //     {
  //         cnf?.setErrors(null)
  //     }
  //   }
  // }
  