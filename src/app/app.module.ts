import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AsideComponent } from './components/Template/aside/aside.component';
import { HeaderComponent } from './components/Template/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';  
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web'; 
export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    AsideComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LottieModule.forRoot({ player: playerFactory }),  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
