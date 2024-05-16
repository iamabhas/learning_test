const {assignObject} = require('../src/index')
const test = {one:1,two:2}

it('should check if object assignment is correct or not',()=>{
    expect(assignObject()).toEqual(test)
})