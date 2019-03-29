class MainCharacter extends Entity {
    
    constructor (position, size, items, speed, lives) {
      super(position, size)
      this.items = items || {}
      this.speed = speed || 1
      this.lives = lives || 100

      var options = {
        friction: 0.3,
        restitution: 0.6
      }
       this.body = Bodies.rectangle(this.position.x, this.position.y, this.size.w, this.size.h, options);
       //World.add(world, this.body);
      
      // this.speed = createVector()
    }
    init () {
      // this.setImage( this.sprite) 
    }

    
    // setImage (images) {
    //   if(images.length > 0) {
    //     images.forEach((img) => {
    //       img = loadImage(img)
    //     })
    //   }
    //   else return; 
    // }

    draw () {
      rect(this.position.x, this.position.y, this.size.height, this.size.width)
      .fill(200, 0, 0)
    }
    
  }
  