class snowflake{
    constructor(x,y){
        var options = {
            friction: 0.001,
            restitution:0.1           
        }
        this.snow = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.snow);
        
    }

   

    display(){
        fill("blue")
        ellipseMode(CENTER);
        this.image = loadImage("snow4.png");
    }
}