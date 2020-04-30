import { Injectable } from '@angular/core';
import { Board } from '../models';
import { CellService } from './cell.service';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor(private cellSvc: CellService) { }

  evolve(board: Board): Board {
    const allCells = board.cells.flat();
    const nextGenerationCells = allCells.map(cell => {
      const nextStatus = this.cellSvc.getNextGenerationStatus(board, cell);
      return { ...cell, status: nextStatus };
    });
    return board.getNewBoard().populateCells(nextGenerationCells);
  }



}
