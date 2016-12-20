import {IDrawingRoute}  from "./IDrawingRoute";
import {DrawingCoordinate}  from "./DrawingCoordinate";

export class SchematicDrawingRoute implements IDrawingRoute{
    uuid: string;
    points: Array<DrawingCoordinate>;
}