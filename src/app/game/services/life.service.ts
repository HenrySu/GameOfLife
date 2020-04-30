import { Injectable } from '@angular/core';
import { Cell, LifeStatus } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LifeService {

  constructor() { }

  getLivingCells(): Cell[] {
    return [
      { status: LifeStatus.Alive, x: 3, y: 3 },
      { status: LifeStatus.Alive, x: 4, y: 3 },
      { status: LifeStatus.Alive, x: 3, y: 4 },
      { status: LifeStatus.Alive, x: 4, y: 4 },
    ];
  }
}
