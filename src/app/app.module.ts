import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
//  pages
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { SearchResultsPage } from '../pages/search-results/search-results';
import { AccountSettingsPage } from '../pages/account-settings/account-settings';
import { SavedCitiesPage } from '../pages/saved-cities/saved-cities';
import { WeatherCardPage } from '../pages/weather-card/weather-card';
import { CardListPage } from '../pages/card-list/card-list';
import { LobbyMenuPage } from '../pages/lobby-menu/lobby-menu';
//  providers
import { RestWeather } from '../providers/rest-weather';
import { RestWWUser } from '../providers/rest-ww-user';
import { CitiesRest } from '../providers/cities-rest';
import { LocationService } from '../providers/location-service';
import { CardService } from '../providers/card-service';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    LobbyPage,
    SearchResultsPage,
    AccountSettingsPage,
    SavedCitiesPage,
    WeatherCardPage,
    CardListPage,
    LobbyMenuPage
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
    SavedCitiesPage,
    WeatherCardPage,
    CardListPage,
    LobbyMenuPage
  ],
  providers: [
    RestWeather,
    RestWWUser,
    CitiesRest,
    LocationService,
    CardService]
})
export class AppModule {}
