import { CommonModule } from '@angular/common';
import { User_LayoutComponent } from './../../../../layout/Components/user-face/layout/layout.component';
import { User_SidebarComponent } from '../../../../layout/Components/user-face/sidebar/sidebar.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { UserInterfaceService } from '../../user-interface.service';
import { NzLayoutModule } from 'ng-zorro-antd/layout';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    User_LayoutComponent,
    NzIconModule,
    User_SidebarComponent,
    NzLayoutModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  projectID : any;
  projects: any[] = [];
  constructor(private userService: UserInterfaceService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectID = params['id'];
    });
    this.getProejct();
  }
  getProejct(): void {
    this.userService.getProejct().subscribe(
      (data) => {
        this.projects = data;
      },
      (error) => {
        console.error('Error fetching projects:', error);
      }
    );
  }
}
