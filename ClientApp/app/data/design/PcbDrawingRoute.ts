import {IDrawingRoute}  from "./IDrawingRoute";
import {DrawingCoordinate}  from "./DrawingCoordinate";

export class PcbDrawingRoute implements IDrawingRoute{
    uuid: string;
    points: Array<DrawingCoordinate>;
}