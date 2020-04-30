import { Component, OnInit, Input } from '@angular/core';
import { BoardSize, Board, Cell, BoardCoordinate, LifeStatus } from '../models';
import { LifeService } from '../services/life.service';
import { interval } from 'rxjs';
import { GameService } from '../services/game.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  @Input() boardSize: BoardSize;
  board: Board;
  constructor(private gaveSvc: GameService,
    private lifeSvc: LifeService) { }

  ngOnInit(): void {
    this.gaveSvc.getLivingCellCoordinates().subscribe(livingCellCoords => this.board = this.initializeBoard(this.boardSize, livingCellCoords));
    interval(1000).subscribe(_ => this.board = this.lifeSvc.evolve(this.board));
  }

  initializeBoard(boardSize: BoardSize, livingCellCoords: BoardCoordinate[]): Board {
    return new Board(boardSize.xSize, boardSize.ySize).updateLivingCells(livingCellCoords);
  }

  isCellAlive(cell: Cell) {
    return cell.status === LifeStatus.Alive;
  }
}
