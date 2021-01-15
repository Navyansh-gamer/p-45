var backgroundImg;
var earth;
var textB;



function preload(){
  backgroundImg=loadImage("Earth.png")
  
}

function setup(){
  
  createCanvas(1200,600);

  earth=createSprite(600,300,1200,600);
  earth.addImage("b1",backgroundImg);

  textB=createInput("");
  textB.position(500,550);
  
  
}

function draw(){
  background("black");
  
   drawSprites();
  
}