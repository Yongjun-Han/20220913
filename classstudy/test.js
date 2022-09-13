class Surinam {
  constructor(actor, character, city) {
    this.actor = actor;
    this.character = character;
    this.city = city;
  }
}

let actor = ['황정민', '하정우', '박해수', '유연석', '조우진'];

let chracter = ['전목사', '피쉬맨', '국정원', '변호사', '요원'];

let box = [];
actor.forEach((value, index) => {
  box.push(new Surinam(actor[index], chracter[index], '수리남'));
});

// console.table(box);

let boxNim = [];
box.map((value)=> {
  boxNim.push(value.actor+ " 배우님");
});


console.log(boxNim);
console.log(box);

const fs = require("fs");
let saveFile = JSON.stringify(box, null, 2);
fs.writeFile(`./surinam.json`,saveFile,"utf-8",(err)=> {
  if(err) throw err;
})

