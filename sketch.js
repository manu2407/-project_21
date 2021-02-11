var canvas;
var music;
var rect1,rect2 ,rect3,rect4 ,box ;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
rect1 = createSprite(729,580,200,20);
rect2 =createSprite(520,580,200,20);
rect3=createSprite(311,580,200,20)
rect4 = createSprite(102,580,200,20)
    
rect1.shapeColor="blue";
rect2.shapeColor="red";
rect3.shapeColor="green";
rect4.shapeColor="purple";
//create box sprite and give velocity

box = createSprite(random(20,750),300,20,20)
box.velocityY=3;
box.velocityX=1;
}


function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges= createEdgeSprites();
    box.bounceOff(edges);
    
    if(rect1.isTouching(box) && box.bounceOff(rect1)){
        music.play();
        box.shapeColor= rect1.shapeColor;
       
        
    }
    if(rect2.isTouching(box) && box.bounceOff(rect2)){
        box.shapeColor= rect2.shapeColor;
        music.play();
        
    }
    if(rect3.isTouching(box) && box.bounceOff(rect3)){
        box.shapeColor= rect3.shapeColor;
        music.play();
        
    }
    if(rect4.isTouching(box) && box.bounceOff(rect4)){
        
        
         box.velocityX=0;
        box.velocityY=0;
        music.stop();
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
    text (mouseX + ',' + mouseY ,10,45);
}
