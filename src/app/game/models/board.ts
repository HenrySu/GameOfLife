import { Cell } from './cell';
import { BoardCoordinate } from './board-coordinate';
import { LifeStatus } from './life-status';

export class Board {
    cells: Cell[][];
    constructor(private xSize: number, private ySize: number) {
        this.cells = [];
        for (let x = 0; x < xSize; x++) {
            this.cells[x] = [];
            for (let y = 0; y < ySize; y++) {
                this.cells[x][y] = { x: x, y: y, status: LifeStatus.Dead };
            }
        }
    }

    updateLivingCells(livingCellCoords: BoardCoordinate[]): this {
        livingCellCoords.forEach(({ x, y }: BoardCoordinate) => this.cells[x][y].status = LifeStatus.Alive);
        return this;
    }

    clone(): Board {
        return new Board(this.xSize, this.ySize);
    }
}