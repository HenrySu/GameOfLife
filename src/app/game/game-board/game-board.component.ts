import { Component, OnInit, Input } from '@angular/core';
import { BoardSize, Board } from '../models';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() boardSize: BoardSize;
  board: Board;
  constructor() { }

  ngOnInit(): void {
    this.board = initializeBoard(this.boardSize);
  }

  initializeBoard(boardSize: BoardSize): Board {

  }

}
