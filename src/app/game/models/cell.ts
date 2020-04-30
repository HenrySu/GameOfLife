import { LifeStatus } from './life-status';

export interface Cell {
    location: Location;
    status: LifeStatus;
}