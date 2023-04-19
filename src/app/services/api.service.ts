import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import {
  YouTubeGetVideoI,
  YouTubeVideoSearchI,
  YouTubeVideosI,
  YoutubeChannelResponseI,
} from '../types/youtube';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient, private error: ErrorService) {}

  private urls() {
    const base_url = 'https://youtube-v31.p.rapidapi.com';
    return {
      caption: `${base_url}/captions`,
      search: `${base_url}/search`,
      comments: `${base_url}/commentThreads`,
      videoDetails: `${base_url}/videos`,
      channelDetails: `${base_url}/channels`,
      channelVideos: `${base_url}/search`,
      playlistVideos: `${base_url}/playlistItems`,
      playlistDetails: `${base_url}/playlists`,
    };
  }

  private headers() {
    return new HttpHeaders()
      .set('X-RapidAPI-Key', environment.RapidAPI_Key)
      .set('X-RapidAPI-Host', environment.RapidAPI_Host);
  }

  search(str: string) {
    const headers = this.headers();
    const params = new HttpParams().set('part', 'snippet,id').set('q', str);
    return this.http
      .get<YouTubeVideoSearchI>(this.urls().search, {
        headers,
        params,
      })
      .pipe(
        catchError((error) => {
          this.error.add(error.message);
          return throwError(() => 'An error occurred while searching videos.');
        })
      );
  }

  getVideo(id: string) {
    const headers = this.headers();
    const params = new HttpParams()
      .set('part', 'contentDetails,snippet,statistics')
      .set('id', id);
    return this.http
      .get<YouTubeGetVideoI>(this.urls().videoDetails, {
        headers,
        params,
      })
      .pipe(
        catchError((error) => {
          this.error.add(error.message);
          return throwError(() => 'An error occurred while searching videos.');
        })
      );
  }

  getChannel(id: string) {
    const headers = this.headers();
    const params = new HttpParams()
      .set('part', 'snippet,statistics')
      .set('id', id);
    return this.http
      .get<YoutubeChannelResponseI>(this.urls().channelDetails, {
        headers,
        params,
      })
      .pipe(
        catchError((error) => {
          this.error.add(error.message);
          return throwError(() => 'An error occurred while searching videos.');
        })
      );
  }

  channelVideo(id: string) {
    const headers = this.headers();
    const params = new HttpParams()
      .set('part', 'snippet,id')
      .set('channelId', id);
    return this.http
      .get<YouTubeVideoSearchI>(this.urls().search, {
        headers,
        params,
      })
      .pipe(
        catchError((error) => {
          this.error.add(error.message);
          return throwError(() => 'An error occurred while searching videos.');
        })
      );
  }

  suggestVideo(id = '7ghhRHRP6t4') {
    const headers = this.headers();
    const params = new HttpParams()
      .set('part', 'id,snippet')
      .set('type', 'video')
      .set('relatedToVideoId', id)
      .set('maxResults', '50');
    return this.http
      .get<YouTubeVideosI>(this.urls().search, {
        headers,
        params,
      })
      .pipe(
        catchError((error) => {
          this.error.add(error.message);
          return throwError(() => 'An error occurred while searching videos.');
        })
      );
  }
}
