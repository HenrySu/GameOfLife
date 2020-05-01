import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  alivePercentageDisplayFunc(percentage: number): string {
    return `${percentage * 100}%`;
  }
}
