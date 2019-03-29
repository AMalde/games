class MovingBackground {
    constructor (position, size, img) {
        this.position = position || {}
        this.size = size || {}
        
        this.speed = 20
       
    }
    display () {
        rect (this.position.x, this.position.y, this.size.length, this.size.height)
        .fill(230, 100, 100)
        .stroke(0, 0, 0)
        .strokeWeight(0)
    }
}