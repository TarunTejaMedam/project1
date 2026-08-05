import { ChangeDetectorRef, Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPencilSquare, faPlus, faL } from '@fortawesome/free-solid-svg-icons';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-crud',
  imports: [CommonModule, FontAwesomeModule, FormsModule],
  templateUrl: './user-crud.html',
  styleUrl: './user-crud.css',
})
export class UserCRUD {
  faTrash = faTrash;
  faPencilSquare = faPencilSquare;
  faPlus = faPlus;
  id = '';
  username = '';
  phone = '';
  email = '';
  university = '';
  gender = '';

  userList: any = signal([]);
  isLoading: any = signal(false);

  constructor(private userservice: UserService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.isLoading.set(true);
    this.userservice.getUsers().subscribe((response) => {
      this.userList.set(response);
      this.isLoading.set(false);
    }
    );
  }

  addUser() {
    this.isLoading.set(true);
    let user = {
      id: this.id,
      username: this.username,
      phone: this.phone,
      email: this.email,
      university: this.university,
      gender: this.gender,
    };
    this.userservice.addUser(user).subscribe(() => {
      this.cdr.markForCheck();
      this.loadUsers();
      this.emptyFields();
      this.isLoading.set(false);
    });
  }

  emptyFields() {
    this.id = '';
    this.username = '';
    this.phone = '';
    this.email = '';
    this.university = '';
    this.gender = '';
  }

  deleteUser(id: any) {
    this.isLoading.set(true);
    this.userservice.deleteUser(id).subscribe(() => {
      this.cdr.markForCheck();
      this.loadUsers();
      this.isLoading.set(false);
    });
  }

  viewUser(user: any) {
    this.id = user.id;
    this.username = user.username;
    this.phone = user.phone;
    this.email = user.email;
    this.university = user.university;
    this.gender = user.gender;
  }

  updateUser() {

    this.isLoading.set(true);
    let user = {
      id: this.id,
      username: this.username,
      phone: this.phone,
      email: this.email,
      university: this.university,
      gender: this.gender,
    };
    this.userservice.updateUser(user).subscribe(() => {
      this.cdr.markForCheck();
      this.loadUsers();
      this.emptyFields();
      this.isLoading.set(false);
    });
  }
}
