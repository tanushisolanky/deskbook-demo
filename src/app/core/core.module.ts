import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { AuthGuard } from './services/guard/auth.guard';
import { AuthService } from './services/auth/auth.service';
import { AuthInterceptor } from './services/interceptor/auth/auth.interceptor';
import { AuthCallbackComponent } from './components/auth-callback/auth-callback.component';
import { MasterComponent } from './components/master/master.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoaderComponent } from './loader/loader.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AuthCallbackComponent,
    MasterComponent,
    LoaderComponent,
  ],
  imports: [AppRoutingModule,CommonModule],
  exports:[LoaderComponent],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {}
