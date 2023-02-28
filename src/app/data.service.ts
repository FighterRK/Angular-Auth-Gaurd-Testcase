import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }
  

  checkUserAndPass(uname : string , pwd : string ){

    

    if (uname == "test" && pwd == "test123") {

      localStorage.setItem('username',"admin");
      return true;
      
    } else {

      return false
      
    }

  }


}
