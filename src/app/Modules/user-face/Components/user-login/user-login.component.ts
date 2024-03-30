import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserInterfaceService } from '../../user-interface.service';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';

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
  constructor(private userService: UserInterfaceService, private router: Router, private message: NzMessageService) { }
  login() {
    this.userService.login(this.user).subscribe(
      (response) => {
        console.log('login successful :', response);
        this.message.success('Đăng nhập thành công').onClose.subscribe(() => {
        this.router.navigate(['/user/welcome-home']);
        });
      },
      (error) => {
        this.message.error('Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin đăng nhập.', error);
      }
      );
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
}
