import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {PostsService} from "./services/posts.service";
import {PhotosService} from "./services/photos.service";
import {UsersService} from "./services/users.service";
import {HeaderComponent} from "./components/header/header.component";
import {AlbumsService} from "./services/albums.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MicroInstagram';
  posts: any[] = [];
  photos: any[] = [];
  albums: any[] = [];

  photosAndPostThumbnail: any[] = [];

  constructor(private usersService: UsersService,
              private postsService: PostsService,
              private photosService: PhotosService,
              private albumsService: AlbumsService) {


  }

  ngOnInit() {
    this.fetchPosts();
    this.fetchPhotos();

  }

  fetchPosts() {
    this.postsService.fetchPosts().subscribe((res: any) => {
      this.posts = res;
    })
  }

  fetchPhotos() {
    this.photosService.fetchPhotos().subscribe((res: any) => {
      this.photos = res;
    })
  }

  fetchAlbums(){
    this.albumsService.fetchAlbums().subscribe((res: any) => {
      this.albums = res;
    })
  }

  combinePhotosAndPosts(){
    for(let a of this.photos){

    }
  }

}
