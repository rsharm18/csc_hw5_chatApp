import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserAuthServiceService } from './services/user-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router,private authSer:UserAuthServiceService)
  {
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(`is valid user ? ${this.authSer.validUser} ${this.authSer.name}`)
      if(!this.authSer.validUser)
      {
      this.router.navigate(['/login']);
      return false ;
      }
      else
        return true ;
  }
  
}
