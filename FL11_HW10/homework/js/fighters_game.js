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
    this.logCombatHistory = function() {
        console.log(`Name: ${name}, Wins: ${win}, Losses: ${lose}`);
    }
    this.heal = function (extraHealHP) {
        hp += extraHealHP;
        const maxHP = 100;
        if (hp > maxHP) {
            hp = maxHP;
        }
    }
    this.dealDamage = function (extraHP) {
        hp -= extraHP;
        if (hp < 0) {
            hp = 0;
        }
    }
    this.attack = function (defender) {
        const maxAgil = 100;
        let success = maxAgil - defender.getAgility();
        let currentAttack = Math.random() * maxAgil;
        if (currentAttack < success) {
            defender.dealDamage(damage);
            console.log(`${name} makes ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${name}'s attack missed`);
        }
    }
    this.addWin = function () {
        win++;
    }
    this.addLoss = function () {
        lose++;
    }
}
const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});

function battle (fighter1, fighter2) {
    if (fighter1.getHealth() === 0 || fighter2.getHealth() === 0) {
        console.log(`Battle can't start ${fighter1.getHealth() === 0? fighter1.getName() : fighter2.getName()} is dead`)
    } else {
        while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
        fighter1.addLoss();
        fighter2.addWin();
        break;
    } else if (fighter2.getHealth() === 0) {
        fighter2.addLoss();
        fighter1.addWin();
        break;
    }
    }
}
}
const fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const fighter2 = new Fighter({name: 'Jack', damage: 15, hp: 80, agility: 30});