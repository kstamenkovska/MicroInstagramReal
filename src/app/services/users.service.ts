import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class UsersService{
  private host = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {
  }

  fetchUsers() {
    return this.http.get(this.host);
  }

  fetchUserById(id: number) {
    return this.http.get(this.host + id);
  }


}
