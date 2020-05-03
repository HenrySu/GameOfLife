import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-play-setting',
  templateUrl: './play-setting.component.html',
  styleUrls: ['./play-setting.component.scss']
})
export class PlaySettingComponent implements OnInit {
  @Output() generationLifeSpanChanged: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  sliderChanged($event: MatSliderChange) {
    const generationLifeSpanInMiliSecond = $event.value;
    this.generationLifeSpanChanged.emit(generationLifeSpanInMiliSecond);
  }
}
