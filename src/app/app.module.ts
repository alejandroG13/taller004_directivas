import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import  {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { ArribaComponent } from './componentes/arriba/arriba.component';
import { AbajoComponent } from './componentes/abajo/abajo.component';

@NgModule({
  declarations: [
    AppComponent,
    ArribaComponent,
    AbajoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
