
let backgroundOne 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let layerOne = []

// module aliases
var Engine = Matter.Engine,
  // Render = Matter.Render,
  World = Matter.World,
  Bodies = Matter.Bodies;

var engine;
var world;
var boxes = [];

var ground;

backgroundOne = new MovingBackground({x: 0, y: 0}, {width: 500, Height: 500}, "")

let playerOne = new MainCharacter( {x: 100, y: 100}, {height: 30,width: 30}, {stones: 10}, 100)


function setup() {
    createCanvas(windowWidth, 600)
    engine = Engine.create();
    world = engine.world;

    createTrees(6)
       


    Engine.run(engine);
    var options = {
        isStatic: true
    }
    
    ground = Bodies.rectangle(200, height, width, 100, options);
    
    World.add(world, ground);
    
    

    backgroundOne = new MovingBackground({
        x: 200, 
        y: 0
    }, 
    {
        length: 200, 
        height: 600
    }, 
    ""
    )
}



  
  function draw() {
    //backgroundMovement()
    background(23)
   
    Engine.update(engine);
    backgroundOne.display()
    for ( let i = 0; i < layerOne.length; i++ ) {
      layerOne[i].show()
    } 
    playerOne.draw()
    controlls()
  }

  
    

  
document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = true;
    }
    else if(event.keyCode == 37) {
        leftPressed = true;
    }
    if(event.keyCode == 40) {
        downPressed = true;
    }
    else if(event.keyCode == 38) {
        upPressed = true;
    }
}

function keyUpHandler(event) {
    if(event.keyCode == 39) {
        rightPressed = false;
    }
    else if(event.keyCode == 37) {
        leftPressed = false;
    }
    if(event.keyCode == 40) {
        downPressed = false;
    }
    else if(event.keyCode == 38) {
        upPressed = false;
    }
}





function controlls () {
    if(rightPressed) {
        playerOne.position.x += playerOne.speed / 20
        backgroundOne.position.x -= backgroundOne.speed / 20
    }
    else if(leftPressed) {
        playerOne.position.x -= playerOne.speed / 20
        backgroundOne.position.x += backgroundOne.speed / 20
    }
    else if(upPressed) {
        playerOne.position.y -= playerOne.speed / 20
    }
    else if(downPressed) {
        playerOne.position.y += playerOne.speed / 20
    }
    
    
}


    
  
  
  
  
  
  
  
  
  