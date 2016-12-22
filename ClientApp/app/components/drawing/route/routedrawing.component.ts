import { Component } from '@angular/core';
import { Raphael } from 'raphael';

@Component({
    selector: 'routedrawing',
    templateUrl: './routedrawing.component.html',
    styleUrls: ['./routedrawing.component.css']

})

export class RouteDrawingComponent {

    public draw(){
        //this.drawtool.draw();

        var drawer = Raphael(50, 50, 400, 400);
        var circle =    drawer.circle(50, 40, 10);
        circle.attr("fill", "#f00");
        circle.attr("stroke", "#fff");

    }

    public drawSelected(){
        //draw the selected style - highlight
        this.draw();
    }
          
    clicked(event) {
        this.drawSelected();
    }

}



