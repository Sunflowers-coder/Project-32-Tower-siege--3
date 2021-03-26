class Stand {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options); 
      this.width = width;
      this.height = height;     
      World.add(world, this.body);
    }

    display(){  
      var pos = this.body.position   
      strokeWeight(2);
      fill("#b74444");
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      rect(0,0,this.width, this.height);
      pop();
    }
  }