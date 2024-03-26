import { Component} from '@angular/core';
import { RouterModule, Router  } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserInterfaceService } from '../../user-interface.service';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NzAlertModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule
  ],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.scss'
})
export class UserLoginComponent {
  user = {
    emailAddress: '',
    password: ''
  };
  showPassword = false;
  loginSuccess = false;
  loginError = false;
  constructor(private userService: UserInterfaceService,private router: Router){}
  login() {
    this.userService.login(this.user).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.loginSuccess = true;
        this.loginError = false;
        setTimeout(() => {
          this.router.navigate(['/user/welcome-home']);
        }, 1000);
      },
      (error) => {
        console.error('Login failed:', error);
        this.loginSuccess = false;
        this.loginError = true;
      }
    );
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
