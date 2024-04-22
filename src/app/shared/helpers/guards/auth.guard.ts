import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UtilityService } from 'src/app/shared/services/utility.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public value: boolean;
  constructor(
    private authService: AuthService,
    private _utilityService: UtilityService
  ) {
    this.value = false;
  }

  home = '/'
  canActivate(): boolean {
    const isAuthenticated = this.authService._isAuthenticated()
    if (!isAuthenticated) {
      this._utilityService.removeAllProperties();
      this._utilityService.navigateTo(this.home)
    }
    return true;
  }
}
