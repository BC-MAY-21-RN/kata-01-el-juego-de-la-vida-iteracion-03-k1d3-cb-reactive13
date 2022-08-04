class Board {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.table = this.initializeBoard();
    }

    initializeBoard() {
        let array1 = []
        let array2 = []

        for (let i = 0; i < this.y; i++) {
            for (let j = 0; j < this.x; j++) {
                let x = Math.floor(Math.random() * 2)
                array2.push(x)
            }
            array1.push(array2)
            array2 = []
        }
        this.table = array1
        return this.table
    }

    sum(a, b) {
        return a + b;
    }
}

//const sum = (a, b) => a + b
//module.exports = { sum }
module.exports = { Board }