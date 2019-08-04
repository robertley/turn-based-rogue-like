import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { BattleComponent } from './components/scenes/battle/battle.component';
import { StartComponent } from './components/scenes/start/start.component';
import { MenuComponent } from './components/scenes/menu/menu.component';
import { HeroComponent } from './components/game/hero/hero.component';
import { EventComponent } from './components/scenes/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BattleComponent,
    StartComponent,
    MenuComponent,
    HeroComponent,
    EventComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
