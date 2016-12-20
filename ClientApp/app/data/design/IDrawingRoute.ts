import {IDrawingCoordinate}  from "./IDrawingCoordinate";

export interface IDrawingRoute{
    uuid: string;
    points: Array<IDrawingCoordinate>;
}