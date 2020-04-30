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
  constructor(private gameSvc: GameService,
    private lifeSvc: LifeService) { }

  ngOnInit(): void {
    this.gameSvc.getRandomBoard(this.boardSize).subscribe(board => this.board = board);
    interval(1000).subscribe(_ => this.board = this.lifeSvc.evolve(this.board));
  }

  isCellAlive(cell: Cell) {
    return cell.status === LifeStatus.Alive;
  }
}
