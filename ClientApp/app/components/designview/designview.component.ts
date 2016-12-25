import { Component } from '@angular/core';

//import IService = require("./raphael");

import * as Raphael from 'raphael';

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

            var c = <HTMLCanvasElement> document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.moveTo(0,0);
            ctx.lineTo(200,100);
            ctx.stroke();


/*
                var drawer = Raphael("myCanvas", 200, 200);
                var circle =    drawer.circle(50, 40, 10);
                circle.attr("fill", "#f00");
                circle.attr("stroke", "#fff");
*/


    }
          
    clicked(event) {
        this.draw();
    }

}
