/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

//-----------------------JS3 Code----------------------------//

// function GameObject(obj) {
//     this.createdAt = obj.createdAt
//     this.name = obj.name
//     this.dimensions = obj.dimensions
//   }
//   GameObject.prototype.destroy = function () {
//     return `${this.name} was removed from the game.`
//   }


// function CharacterStats(obj2) {
//     GameObject.call(this, obj2) // call links functions
//     this.healthPoints = obj2.healthPoints
// }
// CharacterStats.prototype = Object.create(GameObject.prototype)
// CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`
// }

// function Humanoid(obj3) {
//     this.team = obj3.team
//     this.weapons = obj3.weapons
//     this.language = obj3.language
//     CharacterStats.call(this, obj3)
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype)
// Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}`
// }

//----------------------JS3 Code end-------------------------------//
//----------------------New Code-----------------------------------//
class GameObject {
    constructor(attributes) {
        this.createdAt = attributes.createdAt
        this.name = attributes.name
        this.dimensions = attributes.dimensions
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor(characterStatsAttributes) {
        super(characterStatsAttributes);
        this.newHealthPoints = characterStatsAttributes.healthPoints
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

class Humanoid extends CharacterStats {
    constructor(humanoidAttributes) {
        super(humanoidAttributes);
        this.team = humanoidAttributes.team
        this.weapons = humanoidAttributes.weapons
        this.dimensions = humanoidAttributes.dimensions
    }
    greet(){
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

//----------------------New Code--end------------------------------//

//----------------------JS3 Resources------------------------------//

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
});

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
});

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

//-----------------------JS3 Resources end-------------------//