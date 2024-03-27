import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { UserInterfaceService } from '../../user-interface.service';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormGroup, FormBuilder, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Task } from '../../../../Shares/user-model/taskList';
import { Role } from '../../../../Shares/user-model/roles';


@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrl: './user-signup.component.scss',
  standalone: true,
  imports:[
    CommonModule,
    RouterModule,
    NzIconModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NzAlertModule,
    NzSelectModule
  ]
})
export class UserSignupComponent implements OnInit {
  user = {
    picture: '/assets/img/ee2660df9335718b1a80.svg',
    fullName: '',
    password: '',
    emailAddress: '',
    phoneNumber: '',
    roleID: ''
  };
  roles: any[] = [];
  selectedValue: any;
  showPassword = false;
  constructor(private userService: UserInterfaceService, private message: NzMessageService){}

  ngOnInit(): void {
    this.fetchRoles();
  }

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  fetchRoles() {
    this.userService.getRoles().subscribe(
      (response: Role[]) => {
        this.roles = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }

  registerUser() {
    this.userService.registerUser(this.user).subscribe(
      (response) => {
        this.message.error('Đăng ký thành công.');
      },
      (error) => {
        this.message.error('Đăng ký thất bại. Vui lòng kiểm tra lại thông tin đăng ký.');
      }
    );
  }
}
