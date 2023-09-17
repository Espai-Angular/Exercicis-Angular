import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PrimeraMajPipe } from './pipes/primeraMaj.pipe';
import { RegistreService } from './services/registre.service';
import { SalutacioService } from './services/salutacio.service';

@NgModule({
  declarations: [AppComponent, HelloComponent, PrimeraMajPipe],
  imports: [BrowserModule, FormsModule],
  providers: [RegistreService, SalutacioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
