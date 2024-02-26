import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { User_LayoutComponent } from '../../../../layout/Components/user-face/layout/layout.component';
import { User_SidebarComponent } from '../../../../layout/Components/user-face/sidebar/sidebar.component';
import { HeadingComponent } from '../../../../layout/Components/user-face/heading/heading.component';
import { UserWorkAvataComponent } from '../user-work-avata/user-work-avata.component';
import { NzEmptyModule } from 'ng-zorro-antd/empty';

@Component({
  selector: 'app-user-work-reports',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    User_LayoutComponent,
    User_SidebarComponent,
    HeadingComponent,
    UserWorkAvataComponent,
    NzEmptyModule
  ],
  templateUrl: './user-work-reports.component.html',
  styleUrl: './user-work-reports.component.scss'
})
export class UserWorkReportsComponent {
  @Input() tabContent: string[] = [];
  get noContentTemplate(): any {
    return this.noContent;
  }

  private noContent() {
    return `<p>Không có dữ liệu để hiển thị.</p>`;
  }
}
