/// <reference path='IDrawingRoute.ts'/>
/// <reference path='DrawingCoordinate.ts'/>

class SchematicDrawingRoute implements IDrawingRoute{
    uuid: string;
    points: Array<DrawingCoordinate>;
}