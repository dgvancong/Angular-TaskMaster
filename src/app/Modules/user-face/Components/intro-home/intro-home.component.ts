import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-intro-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    NzDropDownModule
  ],
  templateUrl: './intro-home.component.html',
  styleUrl: './intro-home.component.scss'
})
export class IntroHomeComponent {

}
