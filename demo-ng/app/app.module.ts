import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { AppComponent } from './app.component';

import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';
@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule, YoutubePlayerModule],
  declarations: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
