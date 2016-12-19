/// <reference path='IDesignFile.ts'/>

class SchematicDesignFile implements IDesignFile{
    uuid: string;
    name: string;
    lastedit: Date;

    routes: Array<SchematicDrawingRoute>;
}