import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BotoComponent } from './boto/boto.component';
import { FormsModule } from '@angular/forms';
import { AppBootstrapComponent } from './app-bootstrap/app-bootstrap.component';
import { BotoBootstrapComponent } from './boto-bootstrap/boto-bootstrap.component';
import { AppVanillaComponent } from './app-vanilla/app-vanilla.component';
import { FormNovaCiutatComponent } from './form-nova-ciutat/form-nova-ciutat.component';
import { CiutatComponent } from './ciutat/ciutat.component';

@NgModule({
  declarations: [
    AppComponent,
    BotoComponent,
    AppBootstrapComponent,
    BotoBootstrapComponent,
    AppVanillaComponent,
    FormNovaCiutatComponent,
    CiutatComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
