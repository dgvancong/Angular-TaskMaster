import { Component, OnInit } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDrawerModule} from 'ng-zorro-antd/drawer';
import { HttpClientModule } from '@angular/common/http';
import { UserInterfaceService } from '../../../../Modules/user-face/user-interface.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { SplitterModule } from 'primeng/splitter';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { formatDate } from '@angular/common';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzInputModule } from 'ng-zorro-antd/input';
import { User_SidebarComponent } from '../sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { Project, ResponseDataProject } from '../../../../Shares/user-model/project';


@Component({
  selector: 'app-user-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
  standalone:true,
  imports: [
    NzDropDownModule,
    NzDrawerModule,
    HttpClientModule,
    RouterModule,
    CommonModule,
    ButtonModule,
    EditorModule,
    FormsModule,
    NzTableModule,
    SplitterModule,
    NzIconModule,
    NzModalModule,
    NzTabsModule,
    ReactiveFormsModule,
    NzAlertModule,
    NzSelectModule,
    NzDatePickerModule,
    NzPopconfirmModule,
    NzInputModule,
    User_SidebarComponent,
    NzLayoutModule,
    NzBreadCrumbModule
  ],
})
export class User_LayoutComponent implements OnInit {
  constructor( private route: ActivatedRoute ,private router: Router, private userService: UserInterfaceService , private modal: NzModalService, private nzMessageService: NzMessageService){}
  userData: any;
  showEditor = false;
  users: any[] = [];
  teamID : any;
  teamData: any;
  projects: Project[] = [];
  isVisible = false;
  visible = false;
  dateFormat = 'yyyy-MM-dd';
  projectId :any;
  projectData: any;
  isCollapsed = false;
  isCollapsedBar: boolean = false;


  task = {
    projectID: '',
    taskType: '',
    summary: '',
    userID: '',
    status: 'To Do',
    createdDate: '',
    endDate: '',
    priority: '',
    description: '',
    taskDescription: 'Create marketing materials for campaign',
    actualHoursSpent: '',
    taskManagerID: ''
  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
    });

    this.userLogin();
    this.getProjectTeamID();
    this.getProjectData();
    this.fetchProject();
  }

// Công tắt của NG-ZRRO
  openDrawer(): void {
    this.visible = true;
  }
  closDrawer(): void {
    this.visible = false;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {
    this.isVisible = false;
    const formattedCreatedDate = formatDate(this.task.createdDate, 'yyyy-MM-dd HH:mm:ss', 'en-US');
    this.task.createdDate = formattedCreatedDate;
    this.task.endDate = formattedCreatedDate;
    this.userService.addTask(this.task).subscribe(
      (response) => {
        this.modal.success({
          nzTitle: 'Thành công',
          nzContent: 'Tạo công việc thành công',
          nzOnOk: () => {
            window.location.reload();
          }
        });
      },
      (error) => {
        this.modal.error({
          nzTitle: 'Lỗi',
          nzContent: 'Tạo công việc thất bại',
        });
      }
    );
  }
  toggleSidebar() {
    this.isCollapsedBar = !this.isCollapsedBar;
    console.log('ok');

  }
// Hàm call api của tầng
  fetchUser() {
    this.userService.getUsers().subscribe(
      (response) => {
        this.users = response;
      },
      (error) => {
        console.error('Error fetching roles:', error);
      }
    );
  }
  fetchProject() {
    this.userService.getProejct().subscribe(
      (response: ResponseDataProject) => {
        this.projects = response.data;
      },
      (error) => {
        console.error('Lỗi dữ liệu về thông tin dự án:', error);
      }
    );
  }
  getProjectData() {
    if (this.projectId) {
      this.userService.getProjectById(this.projectId).subscribe(
        (data) => {
          this.projectData = data;
        },
        (error) => {
          console.error('Lỗi khi lấy dự án theo ID:', error);
        }
      );
    } else {
      console.error('projectId không được định nghĩa. Không thể lấy dự án theo ID.');
    }
  }
  userLogin(){
    const userID = localStorage.getItem('userID');
    this.userService.getUserInfo(userID).subscribe(
      (data) => {
        this.userData = data.userLogin;
      },
      (error) => {
        console.error('Không có dữ liệu từ người dùng', error);
      }
    );
  }
  getProjectTeamID(){
    this.route.params.subscribe((params) => {
      this.teamID = + params['id'];
      this.userService.getProjectTeamID(this.teamID).subscribe(
        (data) => {
          this.teamData = data.projectTeam;
          console.log("Thành viên dự án :",this.teamData);
        },
        (error) => {
          console.error('Error fetching project team data:', error);
        }
      );
    });
  }
  confirm() {
    this.nzMessageService.success('Đăng xuất thành công');
    this.userService.logout();
    this.router.navigate(['user/login']);
  }
  cancel() {
    this.nzMessageService.info('Hủy');
  }
}
