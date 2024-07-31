class Walker
  //an idea of a dot that can move up and down and left and right
  {
    constructor()
    {
    console.log("hello brother😈 ")
    this.x=400;
    this.y=400;
    this.step=25;
    
    
    
  }
   showUp()
   {
     //style the next points.
    stroke(random(["#FFC7ED","#7D8ABC","#304463"]));
    strokeWeight(30);
     //drae the 
     point(this.x,this.y);
   }
    
   doOneStep() 
   {
     //change direction
     let doiwannagoX=random([-1,1]);
  let doiwannagoY=random([-1,1]);
  
     //change position
     this.x+=this.step*doiwannagoX;
     this.y+=this.step*doiwannagoY;
     //draw dot again
     this.showUp();
   }

  }