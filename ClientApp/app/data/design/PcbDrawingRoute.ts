/// <reference path='IDrawingRoute.ts'/>
/// <reference path='DrawingCoordinate.ts'/>

class PcbDrawingRoute implements IDrawingRoute{
    uuid: string;
    points: Array<DrawingCoordinate>;
}