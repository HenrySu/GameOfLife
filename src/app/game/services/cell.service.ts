import { Injectable } from '@angular/core';
import { Board, Cell, LifeStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CellService {

  constructor() { }

  getNeighbors(board: Board, { x, y }: Cell): Cell[] {
    return [
      board.cells[this.normalizeIndex(x - 1, board.rowCount)][this.normalizeIndex(y - 1, board.columnCount)],
      board.cells[this.normalizeIndex(x, board.rowCount)][this.normalizeIndex(y - 1, board.columnCount)],
      board.cells[this.normalizeIndex(x + 1, board.rowCount)][this.normalizeIndex(y - 1, board.columnCount)],
      board.cells[this.normalizeIndex(x - 1, board.rowCount)][this.normalizeIndex(y + 1, board.columnCount)],
      board.cells[this.normalizeIndex(x - 1, board.rowCount)][this.normalizeIndex(y, board.columnCount)],
      board.cells[this.normalizeIndex(x + 1, board.rowCount)][this.normalizeIndex(y, board.columnCount)],
      board.cells[this.normalizeIndex(x, board.rowCount)][this.normalizeIndex(y + 1, board.columnCount)],
      board.cells[this.normalizeIndex(x + 1, board.rowCount)][this.normalizeIndex(y + 1, board.columnCount)],
    ];
  }

  normalizeIndex(index: number, length: number): number {
    return (index + length) % length;
  }

  getLivingNeighborsCount(board: Board, cell: Cell): number {
    return this.getNeighbors(board, cell)
      .reduce((acc, cur) => cur.status === LifeStatus.Alive ? acc + 1 : acc
        , 0);
  }

  getNextGenerationStatus(board: Board, cell: Cell): LifeStatus {
    const livingNeighborCount = this.getLivingNeighborsCount(board, cell);
    if (cell.status === LifeStatus.Alive
      && (livingNeighborCount === 2 || livingNeighborCount === 3)) {
      return LifeStatus.Alive;
    }

    if (cell.status === LifeStatus.Dead
      && livingNeighborCount === 3) {
      return LifeStatus.Alive;
    }

    return LifeStatus.Dead;
  }
}
