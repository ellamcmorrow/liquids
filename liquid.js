//writing a class
var Liquid=function(x,y,w,h,c,r,g,b,o){ //passing mass in as a parameter 

  this.location=createVector(x,y);
  this.width=w
  this.height=h; //if we make this static the wind should still move the object.
  this.c=c; 




  this.display=function(){
    fill(r,g,b,o);
    //fill(200,160,200);
    stroke(155);
    strokeWeight(2);
    rect(this.location.x,this.location.y,this.width,this.height);
  }
//check if the ball is in the liquid
  this.contains = function(m) {
  return m.location.y>this.location.y&& m.location.y < this.location.y
  + this.height && m.location.x >this.location.x && m.location.x < this.location.x +this.width;
  
};
  
// Calculate drag force
this.calculateDrag = function(m) {
  // Magnitude is coefficient * speed squared
  var speed = m.velocity.mag();
  var dragMagnitude = this.c * speed * speed;

  // Direction is inverse of velocity
  var dragForce = p5.Vector.mult(m.velocity,-1); 
  //dragForce.mult(-1);
  dragForce.normalize();
  dragForce.mult(dragMagnitude);
  return dragForce;
};



}



