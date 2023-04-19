import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.component';
import { WatchPage } from './pages/watch/watch.component';
import { ResultsPage } from './pages/results/results.component';
import { ChannelPage } from './pages/channel/channel.component';
import { HistoryPage } from './pages/history/history.component';

const routes: Routes = [
  { path: '', component: HomePage },
  {
    path: 'watch/:id',
    component: WatchPage,
  },
  {
    path: 'results',
    component: ResultsPage,
  },
  {
    path: 'channel/:id',
    component: ChannelPage,
  },
  {
    path: 'history',
    component: HistoryPage,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
