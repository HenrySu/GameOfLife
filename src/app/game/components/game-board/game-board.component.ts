import { Component, OnInit } from '@angular/core';
import { interval, Subject, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { tap, switchMap } from "rxjs/operators";
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
  boardSubject$: Subject<Board> = new Subject();
  lifespanStream: Subject<number> = new BehaviorSubject(100);
  gameSettingStream: Subject<GameSetting> = new Subject();

  constructor(private gameSvc: GameService,
    private lifeSvc: LifeService) { }

  ngOnInit(): void {
    this.gameSettingStream.pipe(switchMap(setting => this.createGame(setting)))
      .subscribe(_ => this.board = this.lifeSvc.evolve(this.board));
  }


  private createGame(gameSetting: GameSetting): Observable<any> {
    this.board = this.gameSvc.getRandomBoard(gameSetting);
    return this.lifespanStream.pipe(switchMap(lifeSpan => interval(lifeSpan)));
  }

  isCellAlive(cell: Cell) {
    return cell.status === LifeStatus.Alive;
  }

  updateBoard(gameSetting: GameSetting) {
    this.gameSettingStream.next(gameSetting);
  }

  updateLifespan(lifespanInMiliSecond: number) {
    this.lifespanStream.next(lifespanInMiliSecond);
  }
}
