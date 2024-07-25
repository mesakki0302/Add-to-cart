import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl,ValidationErrors } from '@angular/forms';
import { CartService } from 'src/app/service/cart.service';
import { UserService } from 'src/app/service/user.service';
import validateForm from 'src/validateForm';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  
  User!:FormGroup;
  passwordMismatch:boolean = false;

  constructor(private Cart:UserService,private fb:FormBuilder){}

  ngOnInit():void{

  this.User = new FormGroup({
    Fname:new FormControl('',Validators.compose([Validators.required,Validators.minLength(1)])),
    Lname:new FormControl('',Validators.compose([Validators.required,Validators.minLength(1)])),
    Email:new FormControl('',Validators.compose([Validators.required,Validators.minLength(1)])),
    Pass:new FormControl('',Validators.compose([Validators.required,Validators.minLength(1)])),
    CPass:new FormControl('',Validators.compose([Validators.required,Validators.minLength(1)])),
  },

  {
    validators:this.passwordMatchValidator

  });
}

passwordMatchValidator(control:AbstractControl):ValidationErrors|null{

const Pass:any = control.get('Pass');
const Cpass:any = control.get('CPass');

if(Pass.value!== Cpass.value){
  return{'passwordMismatch':true};
}
  return null;
}   

onsub(){
  if(this.User.valid){
    this.Cart.getuser(this.User.value).subscribe((res)=>{
      return res;
    })
  }
  else{
    validateForm.validateAllFormFields(this.User);
    this.passwordMismatch = true;
    alert("Enter valid details");
  }
}

}
