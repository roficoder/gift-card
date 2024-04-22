import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { UtilityService } from 'src/app/shared/services/utility.service';
import { myRoutes } from 'src/app/shared/helpers/enums/routes';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private auth: AuthService, private utility: UtilityService) {
    const isAuth = this.auth._isAuthenticated()
    if (!isAuth) {
      this.utility.navigateTo(myRoutes.dashboard)
    } else {
      this.utility.navigateTo('dashboard/home')
    }
   }

}
