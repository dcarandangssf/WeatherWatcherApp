import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';
import { SavedCitiesPage } from '../pages/saved-cities/saved-cities';

import { WeatherService } from '../providers/weather-service';
import { RestWWUser } from '../providers/rest-ww-user';
import { SavedCitiesService } from '../providers/saved-cities-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    LobbyPage,
    SearchResultsPage,
    AccountSettingsPage,
    SavedCitiesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    LobbyPage,
    SearchResultsPage,
    AccountSettingsPage,
    SavedCitiesPage
  ],
  providers: [
    WeatherService,
    RestWWUser,
    SavedCitiesService]
})
export class AppModule {}
