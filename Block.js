class Block{
    constructor(x, y, width, height,color) {
        var options = {
          isStatic: false    
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.color = color;
        this.visibility = 255;

        World.add(world, this.body);
      }
      display(){
        if(this.body.speed < 3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill(this.color)
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        pop();
      }
      else {
        push();
            World.remove(world, this.body);
            this.visibility=-5;
            tint(255, this.visibility);
            pop();
      }
}
}
