import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BoardCoordinate } from '../models';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getLivingCellCoordinates(): Observable<BoardCoordinate[]> {
    return of([
      { x: 3, y: 3 },
      { x: 4, y: 3 },
      { x: 5, y: 5 },
      { x: 4, y: 4 },
    ]);
  }
}
