import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AvaterComponent } from './avater/avater.component';
import { LinksComponent } from './links/links.component';
import { TabsComponent } from './tabs/tabs.component';
import { JsonFeedItemCardComponent } from './json-feed-item-card/json-feed-item-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AvaterComponent,
    LinksComponent,
    TabsComponent,
    JsonFeedItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
