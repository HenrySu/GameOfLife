import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {
  alivePercentage: number = 0.5;
  settingForm = this.fb.group({
    boardSize: this.fb.group({
      rowCount: 100,
      columnCount: 100
    }),
    alivePercentage: this.alivePercentage
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  alivePercentageDisplayFunc(percentage: number): string {
    return `${(percentage * 100).toFixed(0)}%`;
  }
}
