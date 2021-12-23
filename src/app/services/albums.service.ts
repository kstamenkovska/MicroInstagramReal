import {HttpClient} from "@angular/common/http";

export class AlbumsService {
  private host = 'http://jsonplaceholder.typicode.com/albums';
  constructor(private http: HttpClient) {
  }

  fetchAlbums() {
    return this.http.get(this.host);
  }

  fetchAlbumById(id: number) {
    return this.http.get(this.host + id);
  }

}
