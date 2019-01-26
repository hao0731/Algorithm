const Robot = require('./modules/Robot')
const President = require('./modules/President')
const params = process.argv.slice(2)

let robot = new Robot(params[0])
let president = new President(params[1])

console.log(`交換前指令：${ robot.command }`)
console.log(`交換前傷害：${ robot.damage }`)

while(true) {
    const newCommand = president.intrusion(robot.command)
    if(newCommand === robot.command) {
        break
    }
    president.addFrequency()
    robot.input = newCommand
    if(president.defend(robot.damage)) {
        break
    }
}

console.log(`交換後指令：${ robot.command }`)
console.log(`交換後傷害：${ robot.damage }`)
console.log(`防護罩防禦值：${ president.shield }`)

president.defend(robot.damage)
? console.log(`最少需交換 ${ president.frequency } 次`)
: console.log(`無法防禦！`)
