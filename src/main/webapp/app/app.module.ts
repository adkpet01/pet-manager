import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { PetManagerSharedModule } from 'app/shared/shared.module';
import { PetManagerCoreModule } from 'app/core/core.module';
import { PetManagerAppRoutingModule } from './app-routing.module';
import { PetManagerHomeModule } from './home/home.module';
import { PetManagerEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    PetManagerSharedModule,
    PetManagerCoreModule,
    PetManagerHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    PetManagerEntityModule,
    PetManagerAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class PetManagerAppModule {}
