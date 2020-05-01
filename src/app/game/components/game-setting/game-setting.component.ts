import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-game-setting',
  templateUrl: './game-setting.component.html',
  styleUrls: ['./game-setting.component.scss']
})
export class GameSettingComponent implements OnInit {
  @Output() gameSettingChanged = new EventEmitter();

  alivePercentage: number = 50;

  settingForm = this.fb.group({
    rowCount: 100,
    columnCount: 100,
    alivePercentage: this.alivePercentage,
    evolutionTimeInterval: 100
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.gameSettingChanged.emit(this.settingForm.value);
  }
}
