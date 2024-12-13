import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // ここをインポート
import { FirstComponent } from './first/first.component';  // 


@NgModule({
    imports: [BrowserModule, AppComponent], // AppComponentをここでインポート
  providers: [],
})
export class AppModule { }
