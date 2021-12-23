import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import {PhotosService} from "./services/photos.service";
import {UsersService} from "./services/users.service";
import {HeaderComponent } from './components/header/header.component';
import {AlbumsService} from "./services/albums.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [PostsService,PhotosService,UsersService,AlbumsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
