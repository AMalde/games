class Tree {
    constructor (x, y, height, width, angle, col) {
        this.x = x
        this.y = y
        this.angle = angle
        this.width = width
        this.height = height
        this.col = col
    }

    show () {
        push()
        rotate(this.angle)
        rect(this.x, this.y, this.width, this.height)
        .fill(this.col)
        pop()
    }
}