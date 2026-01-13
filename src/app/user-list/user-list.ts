import { HttpClient } from '@angular/common/http';
import { Component, inject, Inject, signal } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../services/user-service';
import { catchError } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';

@Component({
  selector: 'app-user-list',
  imports: [AgGridModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {

  columnDefs = [
  { field: 'name' },
  { field: 'email' },
  { field: 'age' }
];

rowData: any[] = [];

userService = inject(UserService);
users = signal<Array<User>>([]);
  ngOnInit(): void {
    this.userService
    .getUserList()
    .pipe(
      catchError((err) => {
        console.log(err);
        throw err;
      })
    )
    .subscribe(data => this.rowData = data);
  }
}
