import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// modules
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MembersModule } from './features/members/members.module';
import { CategoryModule } from './features/category/category.module';

import { AppComponent } from './app.component';
import { ScoreboardComponent } from './features/scoreboard/scoreboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ScoreboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    MembersModule,
    CategoryModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
