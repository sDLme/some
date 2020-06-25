import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// modules 
//import { SharedModule } from '../shared/shared.module';

// components
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CoreLayoutComponent } from './core-layout.component';

// services




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CoreLayoutComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    CoreLayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [  ]
    };
  }
}
