import { Component, OnInit, Input } from '@angular/core';
import { BoardSize } from '../models';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() boardSize: BoardSize;
  
  constructor() { }

  ngOnInit(): void {
  }

}
