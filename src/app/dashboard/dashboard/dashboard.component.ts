import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private auth: AuthService, private utility: UtilityService) { }

  ngOnInit() {
    const isAuth = this.auth._isAuthenticated()
    if (!isAuth) {
      this.utility.navigateTo('dashboard/auth')
    } else {
      this.utility.navigateTo('dashboard/home')
    }

  }
}
