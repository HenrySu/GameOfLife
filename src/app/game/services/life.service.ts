import { Injectable } from '@angular/core';
import { BoardCoordinate, Board } from '../models';
import { of, Observable } from 'rxjs';
import { CellService } from './cell.service';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor(private cellSvc: CellService) { }

  getLivingCellCoordinates(): Observable<BoardCoordinate[]> {
    return of([
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
    ]);
  }

  evolve(board: Board): Board {
    const allCells = board.cells.flat();
    const nextGenerationCells = allCells.map(cell => {
      const nextStatus = this.cellSvc.getNextGenerationStatus(board, cell);
      return { ...cell, status: nextStatus };
    });
    return board.clone().populateCells(nextGenerationCells);
  }



}
