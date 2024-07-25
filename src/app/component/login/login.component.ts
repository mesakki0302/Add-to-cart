import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { UserService } from 'src/app/service/user.service';
import { UserComponent } from '../user/user.component';
import validateForm from 'src/validateForm';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

register!:FormGroup;

constructor(private Api:UserService,private router:Router,private dialog:MatDialog,private fb:FormBuilder){}
  

 ngOnInit():void{

  this.register= this.fb.group({ 
    Uname:["",Validators.compose([Validators.required,Validators.minLength(5)])],
    Pass: ["",Validators.compose([Validators.required,Validators.minLength(5)])]
  })

}

onsubmit(){
  if(this.register.valid){
    this.Api.getdata(this.register.value).subscribe((res)=>{
      return res;
    })
    
  }
  else{
    validateForm.validateAllFormFields(this.register);
  }
}


open(){
  this.dialog.open(UserComponent);
}

}
