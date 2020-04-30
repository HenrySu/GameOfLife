import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { GameBoardComponent } from './game/game-board/game-board.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
