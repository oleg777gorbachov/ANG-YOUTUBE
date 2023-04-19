import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorsComponent } from './components/global-errors/global-errors.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePage } from './pages/home/home.component';
import { VideoPreviewComponent } from './components/video-preview/video-preview.component';
import { DatePipe } from './pipes/date.pipe';
import { WatchPage } from './pages/watch/watch.component';
import { SubscribesPipe } from './pipes/subscribes.pipe';
import { ResultsPage } from './pages/results/results.component';
import { FormsModule } from '@angular/forms';
import { ChannelPage } from './pages/channel/channel.component';
import { PlaylistItemComponent } from './components/playlist-item/playlist-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { HistoryPage } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorsComponent,
    HeaderComponent,
    HomePage,
    VideoPreviewComponent,
    DatePipe,
    WatchPage,
    SubscribesPipe,
    ResultsPage,
    ChannelPage,
    PlaylistItemComponent,
    ModalComponent,
    HistoryPage,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
