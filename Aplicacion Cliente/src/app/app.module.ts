import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BaseComponent } from './design/base/base.component';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { IndicatorHomeComponent } from './design/indicator-home/indicator-home.component';
import { IndicatorDisplayComponent } from './design/indicator-home/indicator-display/indicator-display.component';



@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    IndicatorHomeComponent,
    IndicatorDisplayComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,

    RouterModule.forRoot([{
      path: '',  component: IndicatorHomeComponent
    }])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
