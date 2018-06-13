import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { BaseComponent } from './design/base/base.component';
import { HeaderComponent } from './design/header/header.component';
import { FooterComponent } from './design/footer/footer.component';
import { IndicatorDetailComponent } from './design/indicator-detail/indicator-detail.component';
import { IndicatorGraphOptionComponent } from './design/indicator-detail/indicator-graph-option/indicator-graph-option.component';
import { IndicatorDetailFilesComponent } from './design/indicator-detail/indicator-detail-files/indicator-detail-files.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './design/login/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ResultHomeComponent } from './design/result-home/result-home.component';
import { ResultDisplayComponent } from './design/result-home/result-display/result-display.component';
import { IndicatorDisplayComponent } from './design/indicator-home/indicator-display/indicator-display.component';
import { IndicatorHomeComponent } from './design/indicator-home/indicator-home.component';
import { IndicatorAddRegistryComponent } from './design/indicator-detail/indicator-add-registry/indicator-add-registry.component';
import { IndicatorEditMetaComponent } from './design/indicator-detail/indicator-edit-meta/indicator-edit-meta.component';
import { IndicatorEditIndicatorComponent } from './design/indicator-detail/indicator-edit-indicator/indicator-edit-indicator.component';
import { IndicatorDateFilterComponent } from './design/indicator-detail/indicator-date-filter/indicator-date-filter.component';


@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
    HeaderComponent,
    FooterComponent,
    ResultHomeComponent,
    ResultDisplayComponent,
    IndicatorHomeComponent,
    IndicatorDisplayComponent,
    IndicatorDetailComponent,
    IndicatorGraphOptionComponent,
    IndicatorDetailFilesComponent,
    LoginComponent,
    IndicatorAddRegistryComponent,
    IndicatorEditMetaComponent,
    IndicatorEditIndicatorComponent,
    IndicatorDateFilterComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    RouterModule.forRoot([{
      path: 'indicator',  component: IndicatorHomeComponent
    }, {
      path: 'detail',  component: IndicatorDetailComponent
    } , {
      path: 'login',  component: LoginComponent
    }, {
      path: 'result',  component: ResultHomeComponent
    }]),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
