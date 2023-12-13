import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { keys } from "@app/constants/keys";
import { LoginService } from "@app/services/login.service";
import { ToastService } from "@app/components/shared/toast/toast.service";
import { Login } from "@app/models/login";
import { messages } from "@app/constants/messages";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: Login = { email: '', password: '' }

  constructor(
    private loginService: LoginService,
    private toastService: ToastService,
    private router: Router,) {
  }

  ngOnInit(): void {
    if (localStorage.getItem(keys.LOCAL_STORAGE_TOKEN)) {
      localStorage.removeItem(keys.LOCAL_STORAGE_TOKEN);
    }
  }

  authenticate(): void {
    this.loginService.loginWithGoogle().then((response) => {
      console.log(response)
      this.router.navigateByUrl('/home');

    }).catch((error) => {
      this.toastService.showToast(messages.ERROR_LOGIN);
      console.log(error)
    })

  }

}
