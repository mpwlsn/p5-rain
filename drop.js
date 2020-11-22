function Drop(){
  
  this.x = random(width);
  this.y = random(-100, -500);
  this.len = 25;
  
  this.z = random(0, height); //fall height for each drop
  
  //maps z (random number btwn 1-20) to speed (which should be between 1-10)
  this.Yspeed = map(this.z, 0, height, 1, 5);
  
  //maps z to thickness of between 1 and 3
  this.thick = map(this.z, 0, height, 1, 3);
  
  
  this.show = function(){
    strokeWeight(this.thick);
    stroke(102, 153, 255);
    line(this.x,this.y,this.x,this.y + this.len);
  }
  
  this.fall = function(){
    this.y += this.Yspeed;
    this.Yspeed += 0.1;
    this.len -= 0.5;
    
    if(this.y > this.z){ //if beyond fall height
      //ellipse(this.x, this.y + this.len, 5);
      this.y = random(-100, -500);
      this.x = random(width);
      this.Yspeed = map(this.z, 0, height, 1, 5);
      this.len = 25;
    }
  }
}