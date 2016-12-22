import { Component } from '@angular/core';
import { Raphael } from 'raphael';

import {SchematicGridDrawingTool}  from "../../tools/drawing/SchematicGridDrawingTool";

@Component({
    selector: 'designview',
    templateUrl: './designview.component.html',
    styleUrls: ['./designview.component.css']

})

export class DesignViewComponent {

    public drawtool: SchematicGridDrawingTool = new  SchematicGridDrawingTool();
    
    public draw(){
          this.drawtool.draw();


    }
          
    clicked(event) {
        this.draw();
    }

}
