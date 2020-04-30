import { Injectable } from '@angular/core';
import { BoardCoordinate } from '../models';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor() { }

  getLivingCellCoordinates(): Observable<BoardCoordinate[]> {
    return of([
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 3, y: 4 },
      { x: 4, y: 4 },
    ]);
  }
}
