
let backgroundOne 
let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

let playerOne = new MainCharacter( {
    x: 100, 
    y: 100
}, 
{
    height: 30,
    width: 30
}, 
{
    stones: 10
}, 
100
)


let init = function () {

}


function setup() {
    createCanvas(800, 600)
    background(23)
    fill(200, 0, 0)
    
    x = 100; 
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
    //backgroundOne.display()
    rect(x, 200, 100, 100)
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
        }
        else if(leftPressed) {
            playerOne.position.x -= playerOne.speed / 20
        }
        else if(upPressed) {
            playerOne.position.y -= playerOne.speed / 20
        }
        else if(downPressed) {
            playerOne.position.y += playerOne.speed / 20
        }
        
          
    }
  
  
  
  
  
  
  
  
  