import { Cell } from './cell';
import { BoardCoordinate } from './board-coordinate';
import { LifeStatus } from './life-status';

export class Board {
    cells: Cell[][];
    constructor(xSize: number, ySize: number, livingCellCoords: BoardCoordinate[]) {
        this.cells = [];
        for (let x = 0; x < xSize; x++) {
            this.cells[x] = [];
            for (let y = 0; y < ySize; y++) {
                this.cells[x][y] = { x: x, y: y, status: LifeStatus.Dead };
            }
        }
    }
}