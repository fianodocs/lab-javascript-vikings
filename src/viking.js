// Soldier
class Soldier {
    constructor(health, strength){
        health : 100;
        strength:5;
    }

    attack(){
        return this.strength;
        
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    
    constructor(name){
        this.viName: name;
        super(health, strength);
        

    }
    receiveDamage(damage){
        this.health -= damage;
        if(this.health < 1){
            return `${this.viName} has dies in act of combat`;
        } else {
            return `${this.viName} has received ${damage} damage`;
        }
    }
    battleCry(){
        return "odin owns you all!";
    }
}

// Saxon
class Saxon extends Soldier {
    
    super(health, strength);        
    receiveDamage(damage){
        this.health -= damage;
        if(this.health < 1){
            return ` A Saxon has died in act of combat`;
        } else {
            return ` A Saxon has received ${damage} damage`;
        }
    }
}

// War
class War {
    addViking(viking){
        this.vikArmy.push(viking);
        return;
    };
    addSaxon(saxon){
        this.saxArmy.push(saxon);
        return;
    };
    vikingAttk(){
        let sax = Math.this.saxArmy.random();
        let vik = Math.this.vikArmy.random();
        sax.receiveDamage(vik.strength);
        if(sax.health < 1){this.saxArmy.splice()}
    };
    saxonAttk();
    showStatus();
    
    constructor(){
        let saxArmy =[];
        let vikArmy =[];


    }
}
