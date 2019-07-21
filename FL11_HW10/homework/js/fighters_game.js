function Fighter (object) {
    let name = object.name;
    let damage = object.damage;
    let hp = object.hp;
    let agility = object.agility;
    this.getName = function () {
        return name;
    }
    this.getDamage = function () {
        return damage;
    }
    this.getHealth = function () {
        return hp;
    }
    this.getAgility = function() {
        return agility;
    }
    let win = 0;
    let lose = 0;
    this.attack = function (defender) {
        const maxAgil = 100;
        let success = maxAgil - defender.getAgility();
        let currentAttack = Math.random() * maxAgil;
        if (currentAttack < success) {
            defender.hp = defender.hp - damage;
            console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${name}'s attack missed`);
        }
        
    }
    this.logCombatHistory = function() {
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${lose}`);
    }
    this.heal = function (extraHealHP) {
        let totalHealHP = this.getHealth() + extraHealHP;
        const maxHP = 100;
        if (totalHealHP > maxHP) {
            hp = maxHP;
        } else {
            hp = totalHealHP;
        }
        console.log(hp);
    }
    this.dealDamage = function (extraDamageHP) {
        let totalDamageHP = this.getHealth() - extraDamageHP;
        const minHP = 0;
        if (totalDamageHP < minHP) {
            hp = minHP;
        } else {
            hp = totalDamageHP;
        }
        console.log(hp);
    }
    this.addWin = function () {
        win++;
        console.log(win);
    }
    this.addLoss = function () {
        lose++;
        console.log(lose);
    }
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 30, hp: 30, agility: 35});

function battle (fighter1, fighter2) {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        console.log(`Battle can't start ${fighter1.getHealth() === 0? fighter1.getName() : fighter2.getName()} is dead`)
    } else {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
    } else if (fighter2.getHealth() === 0) {
        fighter2.addLoss();
        fighter1.addWin();
    }
}

}
const fighter1 = new Fighter({name: 'John', damage: 20, hp: 10, agility: 25}); 
const fighter2 = new Fighter({name: 'Jack', damage: 80, hp: 100, agility: 50});


