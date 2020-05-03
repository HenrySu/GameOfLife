import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Board, Cell, GameSetting, LifeStatus } from '../../models';
import { GameService } from '../../services/game.service';
import { LifeService } from '../../services/life.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {
  board: Board;
  evolutionSubscription: Subscription;
  constructor(private gameSvc: GameService,
    private lifeSvc: LifeService) { }

  ngOnInit(): void {
  }

  private createGame(gameSetting: GameSetting): Subscription {
    this.gameSvc.getRandomBoard(gameSetting).subscribe(board => this.board = board);
    return interval(gameSetting.evolutionTimeInterval).subscribe(_ => this.board = this.lifeSvc.evolve(this.board));
  }

  isCellAlive(cell: Cell) {
    return cell.status === LifeStatus.Alive;
  }

  updateBoard(gameSetting: GameSetting) {
    this.evolutionSubscription?.unsubscribe();;
    this.evolutionSubscription = this.createGame(gameSetting);
  }

  updateLifespan(lifespanInMiliSecond: number) {
  }
}
