import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { keys } from '@app/constants/keys';
import { messages } from '@app/constants/messages';
import { ToastService } from "@app/components/shared/toast/toast.service";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,  private toastService: ToastService,) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem(keys.LOCAL_STORAGE_TOKEN) !== null)
      return true;
    this.toastService.showToast(messages.NOT_AUTH);
    this.router.navigate(['/login'])
    return  false
  }

}
