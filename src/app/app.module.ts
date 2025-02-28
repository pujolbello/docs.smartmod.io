import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiDocsComponent } from './pages/api-docs/api-docs.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocumentationService } from './services/documentation/documentation.service';
import { AllDocsComponent } from './pages/all-docs/all-docs.component';
import { HomeComponent } from './pages/home/home.component';
// import { NZ_ICONS } from 'ng-zorro-antd/icon';
// import { NZ_I18N, es_ES } from 'ng-zorro-antd/i18n';
// import { IconDefinition } from '@ant-design/icons-angular';
import { ZorroModule } from './zorro/zorro.component';
import { MenuLeftComponent } from './components/menu-left/menu-left.component';
import { DocsContentComponent } from './pages/all-docs/components/docs-content/docs-content.component';
import { TitleDescriptionComponent } from './pages/all-docs/components/docs-content/components/title-description/title-description.component';
import { EndpointsComponent } from './pages/all-docs/components/docs-content/components/endpoints/endpoints.component';
import { ApiRestDocsComponent } from './pages/all-docs/components/docs-content/components/api-rest-docs/api-rest-docs.component';
import { ContentsComponent } from './pages/all-docs/components/docs-content/components/contents/contents.component';
import { ObjectComponent } from './pages/all-docs/components/docs-content/components/object/object.component';
import { HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { HighlightPlusModule } from 'ngx-highlightjs/plus';
import { WebsocketDocsComponent } from './pages/all-docs/components/docs-content/components/websocket-docs/websocket-docs.component';
import { MqttDocsComponent } from './pages/all-docs/components/docs-content/components/mqtt-docs/mqtt-docs.component';

// registerLocaleData(es);

// const antDesignIcons = AllIcons as {
//   [key: string]: IconDefinition;
// };

@Injectable({
  providedIn: 'root' // Esto lo hace accesible globalmente en toda la aplicación
})
@NgModule({
  declarations: [
    AppComponent,
    ApiDocsComponent,
    AllDocsComponent,
    HomeComponent,
    MenuLeftComponent,
    DocsContentComponent,
    TitleDescriptionComponent,
    EndpointsComponent,
    ApiRestDocsComponent,
    ContentsComponent,
    ObjectComponent,
    WebsocketDocsComponent,
    MqttDocsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ZorroModule,
    HighlightPlusModule
  ],
  providers: [DocumentationService, {
    provide: HIGHLIGHT_OPTIONS,
    useValue: {
      fullLibraryLoader: () => import('highlight.js')
    }
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

//{ provide: NZ_I18N, useValue: es_ES }, { provide: NZ_ICONS, useValue: icons }
