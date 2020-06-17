const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;
var platform;
var bird, slingShot;

var gamestate = "Ready";

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    // Bottom Level

    box1 = new Box(330, 225, 30, 40);
    box2 = new Box(360, 225, 30, 40);
    box3 = new Box(390, 225, 30, 40);
    box4 = new Box(420, 225, 30, 40);    
    box5 = new Box(450, 225, 30, 40);

    // Middle Level

    box6 = new Box(365, 215, 30, 40);
    box7 = new Box(395, 215, 30, 40);
    box8 = new Box(425, 215, 30, 40);

    // Top Level

    box9 = new Box(395, 115, 30, 40);

    // Platfrom For Boxes

    log1 = new Log(415,230,300, 5);



    bird = new Bird(100,100);
    slingshot = new SlingShot(bird.body,{x:200,y:100});
}

function draw(){
    background("white");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    
    log1.display();

    bird.display();
    slingshot.display();    
}
function mouseDragged(){
    if (gamestate === "Ready"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gamestate = "Launched";
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(bird.body);
    }
}
