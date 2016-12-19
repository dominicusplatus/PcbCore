import { Component } from '@angular/core';

//import * from '../../tools/SchematicGridDrawingTool';
/// <reference path='../../references.ts'/>

/// <reference path='../../tools/drawing/SchematicGridDrawingTool.ts'/>


@Component({
    selector: 'designview',
    templateUrl: './designview.component.html',
    styleUrls: ['./designview.component.css']
})
export class DesignViewComponent {

    drawtool: SchematicGridDrawingTool;

    constructor() {
       
    }
    
}
