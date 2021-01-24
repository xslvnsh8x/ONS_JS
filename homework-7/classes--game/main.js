class Enemy {
  static type = "ENEMY";

  constructor(options) {
    this.name = options.name;
    this.hp = options.hp;
    this.color = options.color;
    this.damage = options.damage;
    this.range = options.range;
  }

  attack(target, range) {
    if (range <= this.range) {
      target.hp -= this.damage;
    }
    return target;
  }

  getDamage(damage) {
    return (this.hp -= damage);
  }

  battleCry() {
    console.log(`I am ${this.name} and I will destroy you!!`);
  }
}

class Knight extends Enemy {
  static type = "KNIGHT";

  constructor(options) {
    super(options);
  }

  attackAll(targets) {
    targets.forEach((el) => (el.hp -= 30));
    console.log("К рыцарю лучше не подходить толпой!");
    return targets;
  }
}

class Elf extends Enemy {
  static type = "ELF";

  constructor(options) {
    super(options);
  }

  magicAttack(target, range) {
    if (range <= 30) {
      target.hp -= 50;
    }
    console.log(`Эльф применил заклинание "Spell 1"`);
    return target;
  }
}

class Dwarf extends Enemy {
  static type = "DWARF";

  constructor(options) {
    super(options);
  }

  throwAxe(target, range) {
    if (range <= 30) {
      target.hp -= 50;
    }
    console.log(`Звучит свист топоров!`);
    return target;
  }
}

const knight1 = new Knight({
  name: "Richard",
  hp: 100,
  color: "red",
  damage: 20,
  range: 20,
});

const elf1 = new Elf({
  name: "Elf1",
  hp: 100,
  color: "blue",
  damage: 15,
  range: 40,
});

const dwarf1 = new Dwarf({
  name: "Dwarf1",
  hp: 100,
  color: "grey",
  damage: 30,
  range: 10,
});

let targets = [knight1, elf1, dwarf1];

// Примеры:
console.log(knight1.attack(dwarf1, 10)); // {name: "Dwarf1", hp: 80, color: "grey", damage: 30, range: 10}
console.log(knight1.battleCry()); // I am Richard and I will destroy you m#f#cker!!
console.log(knight1.getDamage(40)); // 60
console.log(knight1.attackAll(targets));
/*
К рыцарю лучше не подходить толпой!
0: Knight {name: "Richard", hp: 30, color: "red", damage: 20, range: 20}
1: Elf {name: "Elf1", hp: 70, color: "blue", damage: 15, range: 40}
2: Dwarf {name: "Dwarf1", hp: 50, color: "grey", damage: 30, range: 10}
*/
