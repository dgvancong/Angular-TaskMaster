import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterModule,
    NzDropDownModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Snap Work';
}
// ngOnInit(): void {
//   this.route.params.subscribe(params => {
//     this.projectId = params['id'];
//   });
//   this.getTaskProjectData();
// }
// getTaskProjectData() {
//   if (this.projectId) {
//     this.userService.getTaskProjectById(this.projectId).subscribe(
//       (data) => {
//         this.projectData = data;
//       },
//       (error) => {
//         console.error('Lỗi khi lấy dự án theo ID:', error);
//       }
//     );
//   } else {
//     console.error('projectId không được định nghĩa. Không thể lấy dự án theo ID.');
//   }
// }
