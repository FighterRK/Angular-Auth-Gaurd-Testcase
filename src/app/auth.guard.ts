import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private routes : Router, private dataService : DataService ){}

  canActivate (
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     boolean{

      console.log('Can Activate Called');
      
    
      if (localStorage.getItem('username')!=null) 
      {

        return true;
        
      } else {
        this.routes.navigate(['/login']);
        return false
        
      }

     
  }
  
}
