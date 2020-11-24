class Car
{
    constructor(x,y)
    {
       var options=
        {
            isStatic:false,
            friction:5,
            restitution:0.7
        }
        this.body = Bodies.circle(x,y,40, options);
        this.width = 300;
        this.height = 250;
        this.image = loadImage("obstacle1.png");
        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position;
        push();
        imageMode(CENTER);
        //ellipseMode(RADIUS)
        image(this.image, position.x+200, position.y+100);
        //ellipse(position.x,position.y, 40, 40);
        //console.log(position);
        pop();
    }
}