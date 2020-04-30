import { LifeStatus } from './life-status';

export interface Cell {
    x:number;
    y:number;
    status: LifeStatus;
}