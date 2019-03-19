import MainCharacter from 'mainCharacter'

let playerOne = new MainCharacter( {
        x: 100, 
        y: 100
    }, 
    100, 100 )

function setup() {
    // put setup code here
    createCanvas(300, 300)
    background(23)
  }
  
  function draw() {
      playerOne.draw()
      console.log("yoyoyoyo")
      ellipse(mouseX, mouseY, 80, 80);
    // put drawing code here
  }
  
  
  
  
  
  
  
  
  
  