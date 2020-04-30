import { Cell } from './cell';
import { BoardCoordinate } from './board-coordinate';
import { LifeStatus } from './life-status';

export class Board {
    cells: Cell[][] = [[]];
    constructor(public readonly rowCount: number, 
        public readonly columnCount: number) {
        this.cells = [];
        for (let x = 0; x < rowCount; x++) {
            this.cells[x] = [];
            for (let y = 0; y < columnCount; y++) {
                this.cells[x][y] = { x: x, y: y, status: LifeStatus.Dead };
            }
        }
    }

    updateLivingCells(livingCellCoords: BoardCoordinate[]): this {
        livingCellCoords.forEach(({ x, y }: BoardCoordinate) => this.cells[x][y].status = LifeStatus.Alive);
        return this;
    }

    populateCells(cells: Cell[]): this {
        cells.forEach(cell => this.cells[cell.x][cell.y].status = cell.status);
        return this;
    }

    clone(): Board {
        return new Board(this.rowCount, this.columnCount);
    }
}