import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { GameBoardComponent } from './game/components/game-board/game-board.component';
import { GameSettingComponent } from './game/components/game-setting/game-setting.component';
import { MaterialModule } from './material/material.module';
import { PlaySettingComponent } from './game/components/play-setting/play-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    GameBoardComponent,
    GameSettingComponent,
    PlaySettingComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
