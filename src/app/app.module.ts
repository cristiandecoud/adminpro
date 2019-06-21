import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Temporal
import { FormsModule } from '@angular/forms';

// Servicios
import { ServiceModule } from './services/service.module';


  // Rutas
import { AppRoutingModule } from './app-routing.module';

  // Modules
import { PagesModule } from './pages/pages.module';

  // Components
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
