import {IDesignFile}  from "./IDesignFile";
import {SchematicDrawingRoute}  from "./SchematicDrawingRoute";

class SchematicDesignFile implements IDesignFile{
    uuid: string;
    name: string;
    lastedit: Date;

    routes: Array<SchematicDrawingRoute>;
}