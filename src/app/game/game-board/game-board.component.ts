import { Component, OnInit, Input } from '@angular/core';
import { BoardSize, Board, Cell, BoardCoordinate } from '../models';
import { LifeService } from '../services/life.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() boardSize: BoardSize;
  board: Board;
  constructor(private lifeSvc: LifeService) { }

  ngOnInit(): void {
    const livingCellCoords = this.lifeSvc.getLivingCellCoordinates();
    this.board = initializeBoard(this.boardSize, livingCellCoords);
  }

  initializeBoard(boardSize: BoardSize, livingCellCoords: BoardCoordinate[]): Board {
    return new Board(boardSize.xSize, boardSize.ySize, livingCellCoords)
  }

}
