import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { PopupsService } from 'src/app/services/popups.service';
import { RoutingService } from 'src/app/services/routing.service';
import { StorageService } from 'src/app/services/storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public value: boolean;
  constructor(
    public routing: RoutingService,
    private popupsService: PopupsService,
    public storage: StorageService
  ) {
    this.value = false;
  }

  canActivate(): boolean {
    const isAuthenticated = this.storage.isAuthenticated();
    if (!isAuthenticated) {
      this.storage.removeAllProperties();
      this.routing.goToHome();

      this.popupsService.openLoginPopup();
    }
    return true;
  }
}
