import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class UserService {
    user_api = "http://localhost:3000/users";

    httpClient = inject(HttpClient);

    getUsers(){
        return this.httpClient.get(this.user_api);
    }

    addUser(user:any){
        return this.httpClient.post(this.user_api, user);
    }

    deleteUser(userId: any){
        return this.httpClient.delete(`${this.user_api}/${userId}`);
    }

    updateUser(user:any){
        return this.httpClient.put(`${this.user_api}/${user.id}`, user);
    }
}
