class Player
{
    constructor(x,y)
    {
       var options=
        {
            isStatic:false,
            friction:5,
            restitution:0.7
        }
        this.body = Bodies.rectangle(x-70,y-120,50,100, options);
        this.image = loadImage("boy_walking_01.png","boy_walking_02.png","boy_walking_03.png","boy_walking_04.png","boy_walking_05.png","boy_walking_06.png");
        World.add(world,this.body);
    }

    display()
    {
        var position = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y);
        //rect(position.x-70, position.y-120, 50,100)
        //console.log(position);
        pop();
    }
}