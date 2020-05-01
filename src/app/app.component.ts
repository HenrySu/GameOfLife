import { Component, ViewChild } from '@angular/core';
import { GameSetting } from './game/models';
import { GameBoardComponent } from './game/components/game-board/game-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-of-life';
  @ViewChild(GameBoardComponent) gameBoardComponent: GameBoardComponent;
  gameSettingChanged(gameSetting: GameSetting) {
    this.gameBoardComponent.updateBoard(gameSetting);
  }
}
