//writing a class
var Mover =function(x,y,vx,vy,ax,ay,m,r,g,b,o){ //passing mass in as a parameter 

  this.location=createVector(x,y);
  this.velocity=createVector(vx,vy);
  this.acceleration=createVector(ax,ay); //if we make this static the wind should still move the object.
  this.mass=m; 


  this.update=function(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.velocity.limit(10);
    this.acceleration.mult(0);
  }

  this.display=function(){
      fill(r,g,b,o);
    //fill(200,160,200);
    //fill(200,160,200);
    stroke(155);
    strokeWeight(2);
    ellipse(this.location.x,this.location.y,this.mass,this.mass);
  }

  this.checkEdges=function(){
    if(this.location.x>width || this.location.x<0){
      this.velocity.x = this.velocity.x * -1

    }
    if(this.location.y>height || this.location.y<0){
      this.velocity.y = this.velocity.y * -1
      
    }
  }
  this.applyForce=function(force){ //apply force as a parameter
    var f =p5.Vector.div(force,this.mass); //static function
    //dividing by the masss cancels out the times mass in the gravity vector. 
    //this means all the object will fall at the same time
    //this is so we can apply it to other vectors.
    this.acceleration.add(f); //changing the speed at which they are falling;

  }

}



