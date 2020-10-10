//Create variables here
var dog,dogimg,happydog,foodS,foodStock,database;
function preload()
{
dogimg=loadImage("images/dogimg.png");
happydog=loadImage("images/dogimg1.png");
	//load images here
}

function setup() {
 database=firebase.database();
	createCanvas(2000, 2000);
  dog=createSprite(1500,1500,4,5)
  dog.addImage("run",dogimg);
     foodStock=database.ref("food");
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS)
dog.addImage("bow",happydog)
}

  drawSprites();

  //add styles here
function readStock(data){
foodS=data.val();
 }

 function writeStock(x){
   database.ref('/').update({
    food:x 
   })
 }

}



