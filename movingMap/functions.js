function createTrees (numberOfTrees) {
    
    for ( let i = 0; i < numberOfTrees; i++ ) {
        layerOne.push(
            new Tree(
                random(50, windowWidth / numberOfTrees) * i + 10, 
                -100, 
                windowHeight - 200, 
                random(5, 20), 
                random(-0.05, 0.05), 
                color(67,34,23) 
            )
        )
    }
       
}