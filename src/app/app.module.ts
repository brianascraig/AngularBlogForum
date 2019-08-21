import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatMenuModule
} from '@angular/material';
import { ArticleGridComponent } from './article-grid/article-grid.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import {CommonService} from './common.service';
import { HomeComponent } from './home/home.component';
import { ForumCardsComponent } from './forum-cards/forum-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    ArticleGridComponent,
    HomeComponent,
    ForumCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatCardModule
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
