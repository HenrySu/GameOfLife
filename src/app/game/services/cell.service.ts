import { Injectable } from '@angular/core';
import { Board, Cell, LifeStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  constructor() { }

  getNeighbors(board: Board, { x, y }: Cell): Cell[] {
    return [
      board.cells[x - 1][y - 1],
      board.cells[x][y - 1],
      board.cells[x + 1][y - 1],
      board.cells[x - 1][y + 1],
      board.cells[x - 1][y],
      board.cells[x + 1][y],
      board.cells[x][y + 1],
      board.cells[x + 1][y + 1],
    ];
  }

  getLivingNeighborsCount(board: Board, cell: Cell): number {
    return this.getNeighbors(board, cell)
      .reduce((acc, cur) => cur.status === LifeStatus.Alive ? acc + 1 : acc
        , 0);
  }
}
