//import sum from "../lifeGameTry3";

const { Board } = require('../lifeGameTry3.js')

test('Adding 1 + 1 equals 2', () => {
    let test = new Board(4, 4)
    expect((test.sum(1, 1))).toBe(2)
})