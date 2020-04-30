import { Component, OnInit, Input } from '@angular/core';
import { BoardSize, Board, Cell } from '../models';
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
    const livingCells = this.lifeSvc.getLivingCells();
    this.board = initializeBoard(this.boardSize, livingCells);
  }

  initializeBoard(boardSize: BoardSize, cells: Cell[]): Board {

  }

}
