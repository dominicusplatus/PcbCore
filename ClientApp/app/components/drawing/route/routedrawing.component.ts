import { Component } from '@angular/core';
import { Raphael } from 'raphael';
import { Http } from '@angular/http';

import {IDrawingRoute}  from "../../../data/design/IDrawingRoute";

@Component({
    selector: 'routedrawing',
    templateUrl: './routedrawing.component.html',
    styleUrls: ['./routedrawing.component.css']

})

export class RouteDrawingComponent {

    public route: IDrawingRoute[];

    constructor(http: Http) {
        http.get('/api/routedrawing/PcbRoutes').subscribe(result => {
            this.route = result.json() as IDrawingRoute[];
        });
    }


    public draw(){
        //this.drawtool.draw();

        /*
                var drawer = Raphael(50, 50, 400, 400);
                var circle =    drawer.circle(50, 40, 10);
                circle.attr("fill", "#f00");
                circle.attr("stroke", "#fff");
        */

    }

    public drawSelected(){
        //draw the selected style - highlight
        this.draw();
    }
          
    clicked(event) {
        this.drawSelected();
    }

}



