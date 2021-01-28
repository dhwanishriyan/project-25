class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 0.23
        }

        this.body = Bodies.circle(x, y, radius, options);
        this.radius = radius;
        this.image = loadImage("paper.png");
        World.add(world, this.body);

    }

    display() {
        fill("white");
        stroke("black");

        push();
        translate(this.body.position.x, this.body.position.y);
        //ellipseMode(CENTER);
        //ellipse(0, 0, this.radius);
        image(this.image, 0, 0, 35, 35);
        imageMode(CENTER);
        //this.image( 0, 0, this.radius)
        pop();
    }

}