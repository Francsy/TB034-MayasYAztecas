class Warrior {
    constructor(life, power) {
        this.life = life
        this.power = power
    }
    attack = () => this.power;
    defend = (damage) => {
        this.life -= damage
        console.log(`Damage received: ${damage}, rest life: ${this.life}`)
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkColacao = () => this.power += 10
}

class Aztec extends Warrior {
    constructor(life, power) {
        super(life, power)
    }
    drinkNesquik = () => this.life += 10
}

console.log('Set the life and power of each warrior to start the combat')

let aztecWarriorLife = Number(prompt('Aztec life?'))
let aztecWarriorPower = Number(prompt('Aztec power?'))
let aztecWarrior = new Aztec(aztecWarriorLife, aztecWarriorPower)
let mayaWarriorLife = Number(prompt('Maya life?'))
let mayaWarriorPower = Number(prompt('Maya power?'))
let mayaWarrior = new Maya(mayaWarriorLife, mayaWarriorPower)

// let aztecWarrior = new Aztec(200, 50)
// let mayaWarrior = new Maya(200, 50)

console.log(`The combat starts`)
console.log(`Aztec => life: ${aztecWarrior.life} power: ${aztecWarrior.power} `)
console.log(`Maya => life: ${mayaWarrior.life} power: ${mayaWarrior.power} `)

console.log('Aztec drinks Nesquik')
aztecWarrior.drinkNesquik()

console.log('Maya drinks Colacao')
mayaWarrior.drinkColacao()

console.log('*****Result*****')
console.log(`Aztec => life: ${aztecWarrior.life} power: ${aztecWarrior.power} `)
console.log(`Maya => life: ${mayaWarrior.life} power: ${mayaWarrior.power} `)

console.log(`Maya attacks with ${mayaWarrior.power}`)
console.log(`Aztec`)
aztecWarrior.defend(mayaWarrior.attack())

console.log('*****Result*****')
console.log(`Aztec => life: ${aztecWarrior.life} power: ${aztecWarrior.power} `)
console.log(`Maya => life: ${mayaWarrior.life} power: ${mayaWarrior.power} `)

console.log(`Aztec attacks with ${aztecWarrior.power}`)
console.log(`Maya:`)
mayaWarrior.defend(aztecWarrior.attack())

console.log('*****Result*****')
console.log(`Aztec => life: ${aztecWarrior.life} power: ${aztecWarrior.power} `)
console.log(`Maya => life: ${mayaWarrior.life} power: ${mayaWarrior.power} `)