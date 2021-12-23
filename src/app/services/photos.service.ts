import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class PhotosService {
  private host = 'http://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {
  }

  fetchPhotos() {
    return this.http.get(this.host);
  }

  fetchPhotoById(id: number) {
    return this.http.get(this.host + id);
  }

}
