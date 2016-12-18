/// <reference path='IDrawingRoute.ts'/>

interface IDesignFile{
    uuid: string;
    name: string;
    lastedit: Date;

    routes: Array<IDrawingRoute>;
}