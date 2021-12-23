import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Post} from "../interfaces/post";

@Injectable()
export class PostsService {

  private host = 'http://jsonplaceholder.typicode.com';

  constructor(private http : HttpClient) {
  }

  fetchPosts() {
    return this.http.get(this.host+'/posts');
  }
  fetchPostById(id:number){
    return this.http.get(this.host+'/posts/'+id);
  }



}
