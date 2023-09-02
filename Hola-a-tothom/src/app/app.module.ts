import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimerComponentComponent } from './primer-component/primer-component.component';
import { SalutacioComponent } from './salutacio/salutacio.component';
import { TextEditableComponent } from './text-editable/text-editable.component';
import { DepedencyInjectionComponent } from './depedency-injection/depedency-injection.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimerComponentComponent,
    SalutacioComponent,
    TextEditableComponent,
    DepedencyInjectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
