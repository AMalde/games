class MovingBackground {

    constructor (position, size, img) {
        this.position = position || {}
        this.size = size || {}
        this.img = loadImage(img) || ""
        this.speed = 20
        this.col = color(200,23,23)
    }
    display () {
        rect (this.position.x, this.position.y, this.size.length, this.size.height)
        .fill(this.col)
        .stroke(0, 0, 0)
        .strokeWeight(0)
    }
}