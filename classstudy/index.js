// console.log('hello');

class ItsMe {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city; //최신 문법에서는 this 생략 city;
  }
}

let arr = ['근수', '상호', '예휸', '두진', '영빈'];

let box = [];
arr.forEach(function (value, index) {
  box.push(new ItsMe(index + 1, value, '태초마을'));
});

console.log(box);

let boxNim = [];
box.map((value) => {
  boxNim.push(value.name + '님');
});

console.log(box);
  //oldschool module system
  const fs = require("fs");
  let saveFile = JSON.stringify(box, null, 2); // box 좀 json화 시킬게 
  fs.writeFile(`./test.json`, saveFile, "utf-8", (err)=>{
    if(err) throw err;
  })





// console.log(boxNim);

// class ahyeon extends ItsMe {
//   constructor(id, name, city, eye) {
//     super(id,name,city);
//     this.eye = eye;
//   }
// }

// let test = new ahyeon(1, '이아연', '대전', true);

// console.log(test);
