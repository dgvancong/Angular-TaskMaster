import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { User_LayoutComponent } from '../../../../layout/Components/user-face/layout/layout.component';
import { User_SidebarComponent } from '../../../../layout/Components/user-face/sidebar/sidebar.component';
import { HeadingComponent } from '../../../../layout/Components/user-face/heading/heading.component';
import { UserWorkAvataComponent } from '../user-work-avata/user-work-avata.component';

@Component({
  selector: 'app-user-work-forms',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    User_LayoutComponent,
    User_SidebarComponent,
    HeadingComponent,
    UserWorkAvataComponent

  ],
  templateUrl: './user-work-forms.component.html',
  styleUrl: './user-work-forms.component.scss'
})
export class UserWorkFormsComponent {

}
