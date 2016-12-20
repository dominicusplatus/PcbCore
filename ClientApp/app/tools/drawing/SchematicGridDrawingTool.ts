import { Raphael } from 'raphael';

export class SchematicGridDrawingTool {

    public drawer: Raphael; // = new Raphael()

    public draw(){
        //draw the grid on canvas 

        // Creates canvas 320 × 200 at 10, 50
         this.drawer =  new Raphael(50, 50, 400, 400);

        // Creates circle at x = 50, y = 40, with radius 10
        var circle =    this.drawer.circle(50, 40, 10);
        // Sets the fill attribute of the circle to red (#f00)
        circle.attr("fill", "#f00");

        // Sets the stroke attribute of the circle to white
        circle.attr("stroke", "#fff");
        
    }
}