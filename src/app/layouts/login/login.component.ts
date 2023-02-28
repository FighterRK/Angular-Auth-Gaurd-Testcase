import { Component } from '@angular/core';
import { FormGroup, FormControl,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
provider:[DataService]


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  name : any;
  password : any;
  loginForm : any;


  submission = false;



  constructor (private fb:FormBuilder , private dataService : DataService , private routes : Router){}


 

  ngOnInit(){
    this.loginForm = this.fb.group ({

      userName :[''],
      password : ['']


    })

  }

  onSubmit(form : FormGroup){

    this.name = form.value.userName
    


    
    
    
  }



  //// ###### ////
  result : any

  Check(adminName : string , passwd : string){
    var result = this.dataService.checkUserAndPass(adminName,passwd);
    if (result == true) {
      this.routes.navigate(['/home'])
      
    } else {
      alert('Invalid Data')
      
    }
  }

  onClear(){
    localStorage.clear()
  }


}
