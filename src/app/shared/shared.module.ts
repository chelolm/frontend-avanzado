import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */

// COMPONENTS
import { AppComfirmComponent } from './services/app-confirm/app-confirm.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { MaterialModule } from './material.module';
import { SidebarComponent } from './components/admin-layout/sidebar/sidebar.component';
import { TopnavComponent } from './components/admin-layout/topnav/topnav.component';

// DIRECTIVES

// PIPES

// SERVICES
import { AppConfirmService } from './services/app-confirm/app-confirm.service';

const declarations = [AppComfirmComponent, AdminLayoutComponent, TopnavComponent, SidebarComponent];
const exports = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  RouterModule,
  AppComfirmComponent,
  AdminLayoutComponent
];
const providers = [AppConfirmService];

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule],
  entryComponents: [AppComfirmComponent],
  providers,
  declarations,
  exports
})
export class SharedModule {}
