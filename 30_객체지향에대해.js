let name = 'SAMSUNG'


class Product{ //추상화
  name= '';
  price= 0;
  constructor(name,price){
    this.name= name;
    this.price= price;
  }
  getPrice(){
    return this.price+'만원';
  }
  setPrice(price){
    if(price<0){
      throw Error('마이너스값 안됨')
    }
    this.price = price;
  }
}

// 일종의 작업지시서 어떤요소와 어떤 속성이 있는지 적혀있음.
// 실제 값을 어떻게 넣을 수 있을까? 
// 클래스에 있는 속성들에 값을 초기화 시켜주는 함수가 있음.(=construnctor)
// 클래스안에 있는 속성을 나타내기 위해 this 키워드를 써줌.
class TV extends Product{
  size= '';
  constructor(name, price, size){//생성자
    super(name, price)
    this.size= size
  }
}

let tv1 = new TV('ultra tv', 200, '27inch');
let tv2 = new TV('grand tv', 200, '36inch');

class AC extends Product{
  type= '';
}

class Laptop extends Product{
  weight= 0;
}


let array = [3,2,1]
array.sort()
array.map()