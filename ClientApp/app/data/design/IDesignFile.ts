import {IDrawingRoute}  from "./IDrawingRoute";

export interface IDesignFile{
    uuid: string;
    name: string;
    lastedit: Date;

    routes: Array<IDrawingRoute>;
}