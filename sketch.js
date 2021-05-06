const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var maxDrops=100;
var thunderCreatedFrame=0;
var drops=[];
var rand;
var thunder;
function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png");
    thunder4 = loadImage("images/thunderbolt/4.png");
}

function setup(){
    engine = Engine.create();
    world = engine.world;

     createCanvas(600,600);
     umbrella = new Umbrella(300,400);


     if(frameCount % 130 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new Drop(random(50,600), random(50,500)));
        }

    }

}

function draw(){
    Engine.update(engine); 
    background(0);
   console.log(frameCount);
    for (var i=0; i< maxDrops ;i++){
        drops.push(new Drop(random(0,400),random(0,400)));
    }
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(50,370), random(40,90), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.8,1)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }
    umbrella.display();

    for(var i = 0; i<maxDrops; i++){
        drops[i].display();
        drops[i].updateY();
        
    }
    drawSprites();
}   

