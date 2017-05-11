import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { VoteDetailComponent } from './vote/vote-detail/vote-detail.component';
import { VotePageComponent } from './vote/vote-page/vote-page.component';
import { ChoiceComponent } from './choice/choice/choice.component';
import { ChoiceItemComponent } from './choice/choice-item/choice-item.component';
import { UserComponent } from './user/user/user.component';
import { EventService } from './vote/event.service';
import { WelcomePageComponent } from './vote/welcome-page/welcome-page.component';
import { HeaderComponent } from './common/header/header.component';
import {RatingModule} from "ngx-rating";

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomePageComponent
  },
  {
    path: 'event',
    children: [
      {path: ':id', component: VotePageComponent}
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    VoteDetailComponent,
    VotePageComponent,
    ChoiceComponent,
    ChoiceItemComponent,
    UserComponent,
    WelcomePageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    RatingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
