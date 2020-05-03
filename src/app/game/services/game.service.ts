import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Board, BoardCoordinate, GameSetting, LifeStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getRandomBoolean(alivePercentage: number) {
    return Math.random() < alivePercentage / 100;
  }

  getRandomStatus(alivePercentage: number): LifeStatus {
    return this.getRandomBoolean(alivePercentage) ? LifeStatus.Alive : LifeStatus.Dead;
  }

  getRandomBoard(gameSetting: GameSetting): Board {
    const board = new Board(gameSetting.rowCount, gameSetting.columnCount);

    const cells = board.cells.flat().map(cell => ({ ...cell, status: this.getRandomStatus(gameSetting.alivePercentage) }));
    return board.populateCells(cells);
  }
}
