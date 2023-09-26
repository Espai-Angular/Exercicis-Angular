import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotoComponent } from './boto/boto.component';
import { FormsModule } from '@angular/forms';
import { AppBootstrapComponent } from './app-bootstrap/app-bootstrap.component';
import { BotoBootstrapComponent } from './boto-bootstrap/boto-bootstrap.component';
import { AppVanillaComponent } from './app-vanilla/app-vanilla.component';

@NgModule({
  declarations: [
    AppComponent,
    BotoComponent,
    AppBootstrapComponent,
    BotoBootstrapComponent,
    AppVanillaComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
