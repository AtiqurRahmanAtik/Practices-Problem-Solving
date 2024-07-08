console.log('hello atiqur rahman');

const arr= [0,1,2,3,4,5,6];

const evenNub = arr.filter((e)=> e % 2 ===1).map((e)=> e*3).reduce((pre,cur)=> pre + cur);
console.log(evenNub);



