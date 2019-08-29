import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ProfileService} from './services/profile.service';
import {HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule


    // AppRoutingModule
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
