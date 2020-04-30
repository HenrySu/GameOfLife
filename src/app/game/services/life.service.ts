import { Injectable } from '@angular/core';
import { BoardCoordinate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor() { }

  getLivingCellCoordinates(): BoardCoordinate[] {
    return [
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
    ];
  }
}
