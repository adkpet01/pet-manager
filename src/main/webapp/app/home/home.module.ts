import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PetManagerSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [PetManagerSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class PetManagerHomeModule {}
