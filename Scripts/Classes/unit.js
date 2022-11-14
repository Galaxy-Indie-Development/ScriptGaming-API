export class Unit {
    constructor(id){
        this.x = 0;
        this.y = 0;
        this.id = id;

        switch(this.id){
            case "settler":
                this.attack = 1;
                this.speed = 3;
                break;
            case "warrior":
                this.attack = 3;
                this.speed = 1;
                break;
            case "merchant":
                this.attack = 1.5;
                this.speed = 3;
                break;
        }

        function update(){

        }

        function draw(){
            
        }
    }
}
