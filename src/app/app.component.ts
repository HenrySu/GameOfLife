import { Component } from '@angular/core';
import { GameSetting } from './game/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-of-life';
  gameSettingChanged(gameSetting: GameSetting) {
    console.log(gameSetting)
  }
}
