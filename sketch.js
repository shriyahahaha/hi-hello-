
let traveller = new Walker();
let babydoll= new Walker();
let paratha= new Walker();
let gyatt= new Walker();

function setup() {
  createCanvas(400*10, 400*10);
    background("#FFF8DB");
 
  frameRate(20);
   traveller.showUp();
}


function draw() {
//make my traveller do 1 step 
   
  traveller.doOneStep();
babydoll.doOneStep();
  paratha.doOneStep();
  gyatt.doOneStep();
 
  

}