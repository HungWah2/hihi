import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from './shared/shared.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TaskquizComponent } from './components/taskquiz/taskquiz.component';
import { TrendingComponent } from './components/trending/trending.component';
import { CreateComponent } from './components/create/create.component';
import { AnswerInputComponent } from './components/create/answer-input/answer-input.component';
import { QuestionListItemComponent } from './components/create/question-list-item/question-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    AnswerInputComponent,
    QuestionListItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
