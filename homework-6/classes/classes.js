class Animal {
  static type = 'ANIMAL';

  constructor(options) {
    this.name = options.name;
    this.age = options.age;
    this.hasTail = options.hasTail;
  }

  voice() {
    console.log('I am Animal!');
  }
}

class Cat extends Animal {
  static type = 'CAT';

  constructor(options) {
    super(options);
    this.color = options.color;
  }

  voice() {
    super.voice(); // 'I am Animal!'
    console.log('I am Cat!'); // 'I am Cat!'
  }

  giveBirth() {
    console.log('I am gonna birth some kittens');
    return new Kitten();
  }

  get ageInfo() {
    return this.age * 5;
  }

  set ageInfo(newAge) {
    this.age = newAge;
  }
}

class Kitten extends Cat {
  static type = 'KITTEN';

  constructor(options) {
    super(options);
    this.isVaccinated = options.isVaccinated;
  }
}

class Rabbit extends Animal {
  static type = 'RABBIT';

  constructor(options) {
    super(options);
    this.color = options.color;
    this.isWild = options.isWild;
    this.habitat = options.habitat;
  }

  voice() {
    super.voice(); // 'I am Animal'
    console.log('I am Rabbit!') // 'I am Rabbit'
  }

  run() {
    console.log('Oh no, somebody wants to hunt me! I gotta run!')
    new Chase();
  }
}

class WildCat extends Cat {
  static type = 'WILDCAT';

  constructor(options) {
    super(options);
    this.habitat = options.habitat;
    this.isSpotted = options.isSpotted;
  }

  voice() {
    super.voice();
    console.log('I am wild Cat!');
  }

  hunt() {
    console.log('I am hungry!');
  }
}

class Leopard extends WildCat {
  static type = 'LEOPARD';

  constructor(options) {
    super(options);
    this.isChipped = options.isChipped;
  }
}

const kitten1 = new Kitten({
  name: 'Boris',
  age: '1',
  color: 'white',
  hasTail: true,
  isVaccinated: false
})

const rabbit42 = new Rabbit({
  name: 'Peter',
  age: 4,
  color: 'grey',
  isWild: true,
  habitat: 'forest'
})

const leo = new Leopard({
  name: 'Leo',
  age: 7,
  color: 'beige',
  isWild: true,
  habitat: 'savanna',
  isSpotted: true,
  isChipped: false
})