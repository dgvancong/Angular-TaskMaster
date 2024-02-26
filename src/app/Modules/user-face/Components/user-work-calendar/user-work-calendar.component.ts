import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User_SidebarComponent } from '../../../../layout/Components/user-face/sidebar/sidebar.component';
import { User_LayoutComponent } from '../../../../layout/Components/user-face/layout/layout.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { HeadingComponent } from '../../../../layout/Components/user-face/heading/heading.component';
import { UserWorkAvataComponent } from '../user-work-avata/user-work-avata.component';
import { UserWorkDrapdropComponent } from '../user-work-drapdrop/user-work-drapdrop.component';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-work-calendar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    User_SidebarComponent,
    User_LayoutComponent,
    NzLayoutModule,
    HeadingComponent,
    UserWorkAvataComponent,
    UserWorkDrapdropComponent,
    NzAlertModule,
    NzCalendarModule,
    FormsModule,
    NzModalModule,

  ],
  templateUrl: './user-work-calendar.component.html',
  styleUrl: './user-work-calendar.component.scss'
})
export class UserWorkCalendarComponent {
  selectedValue = new Date('2017-01-25');
  isVisible = false;

  selectChange(select: Date): void {
    console.log(`Select value: ${select}`);
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }

}
