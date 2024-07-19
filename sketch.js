function setup() {
  //we don't set up more than once.
  createCanvas(700, 400);
    background('yellow');
  //creating a yellow canvas.
  
  textSize(50);
  //setting the brush size.
  
  
 frameRate (100);
 
}
function keyPressed()
{
  background('orange');
}

function draw() {
  fill(random(0,255));
   
  
  //a very expensive function, try to put less amt of code in it?
   //it is a repetitive operation, is run continuously.
  let posX = mouseX;
  let posY= mouseY;
  
   text('L',posX,posY);
    //constructing a point
 
    
}