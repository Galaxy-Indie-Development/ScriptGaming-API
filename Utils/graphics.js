export class Graphics{
    constructor(canvas) {
        this.canvas = canvas;
    }

    rectangle(color, x, y, width, height){
        this.canvas.fillStyle = color;
        this.canvas.fillRect(x, y, width, height);
    }

    text(text, color, font, x, y){
        this.canvas.fillStyle = color;
        this.canvas.font = font + 'px san-serif';
        this.canvas.fillText(text, x, y);
    }
}