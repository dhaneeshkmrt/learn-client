import { Injectable } from '@angular/core';
import { User } from '../models/user'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()

export class UserService {

  private _users: BehaviorSubject<User[]>;

  private dataStore: {
      users: User[]
  }

  constructor(private http: HttpClient) {
    this.dataStore = { users: [] };
    this._users = new BehaviorSubject<User[]>([]);
   }

   get users(): Observable<User[]>{
      return this._users.asObservable();
   }

   userById(id: number) {
    return this.dataStore.users.find(x => x.id == id);
   }

   loadAll() {
     const url = 'https://angular-material-api.azurewebsites.net/users';

     return this.http.get<User[]>(url).subscribe(data => {
      this.dataStore.users = data;
      this._users.next(Object.assign({}, this.dataStore).users);
     }, err => {
      console.log("Failed to fetch users!!");
     });
   }

   addUser(user: User): Promise<User> {
      return new Promise((resolve, reject) => {
        user.id = this.dataStore.users.length + 1;
        this.dataStore.users.push(user);
        resolve(user);
      });
   }
}
