
// 객체의 설계도 class

class Pet {

  // 생성자를 통해 필드를 선언
  constructor() {
    this.name = name;
    this.age = age;
  }


// 메서드 선언
introduce() {
  console.log(`내 이름은 ${this.name}이구요, 나이는 ${this.age}`);
  }
}

// 상속
class Dog extends Pet {

  constructor(name, age, hobby) {
    super(name, age);
    this.hobby = hobby;
    this.sleep = sleep;
  }
}

const dog = new Pet('초코', 3);
console.log(dog);
const cat = new Pet('야옹', 2);
console.log(cat);

console.log(dog === cat);


console.log('=================================');


dog.introduce();
cat.introduce();