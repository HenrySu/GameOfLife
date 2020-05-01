import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { GameBoardComponent } from './game/components/game-board/game-board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameSettingComponent } from './game/components/game-setting/game-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameSettingComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
