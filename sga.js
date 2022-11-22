import { Graphics } from './Utils/graphics.js'
var grcs = new Graphics();

export class SGA{
    constructor(){
        this.graphics = [grcs.rectangle(color, x, y, width, height),
            grcs.text(string, color, x, y)];
    }
}
