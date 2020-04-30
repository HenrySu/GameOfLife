import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Board, BoardCoordinate, BoardSize, LifeStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getRandomBoolean() {
    return Math.random() > 0.3;
  }

  getRandomStatus(): LifeStatus {
    return this.getRandomBoolean() ? LifeStatus.Alive : LifeStatus.Dead;
  }

  getRandomBoard(boardSize: BoardSize): Observable<Board> {
    const board = new Board(boardSize.rowCount, boardSize.columnCount);

    const cells = board.cells.flat().map(cell => ({ ...cell, status: this.getRandomStatus() }));
    return of(board.populateCells(cells));
  }

  getLivingCellCoordinates(): Observable<BoardCoordinate[]> {
    return of([
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 5 },
      { x: 4, y: 4 },
    ]);
  }
}
