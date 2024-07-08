console.log('hello atiqur rahman');

const arr= [0,1,2,3,4,5,6];

const evenNub = arr.filter((e)=> e % 2 ===1).map((e)=> e*3).reduce((pre,cur)=> pre + cur);
console.log(evenNub);


function foo(a,b){
    console.log('foo is howaa ');
    // console.log(`foo is howaa ${a + b}`);
    let sum = a + b;
    return sum;
}

foo(10,15);

let result = foo(5,12);
console.log(`Valu is : ${result}`)


//Find  Big Nubmer
const  arr_2= [10,25,30,7,11];

let big = arr_2[0];

for(let i = 0; i< arr_2.length ; i++ ){
    // console.log(arr_2[i]);
    if(big < arr_2[i])
    big = arr_2[i];

}
console.log('Big Value is : ',big);


// arr Sort
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let sortfruit = fruits.sort();
console.log(sortfruit);


// toSort method is best way to sort an array 
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months)
const sorted = months.toSorted();
console.log(months)


// number sorting 
let sortArr = [10,25,60,9,85,5,33];
let newArr = sortArr.sort(function(a,b) {return a - b});
console.log('number sorting array is : ',newArr);



// Reverses array and also 
const reverseArr= (arr) =>{
    // console.log('arr is : ', arr);
    let newVal = arr.reverse();

    const evenNum =newVal.filter((e)=> e % 2 ===0);
    return  {reverse : newVal, Even : evenNum};
}

let val = [7,51,32,41,22];

let res = reverseArr(val);

console.log('reverses value is : ', res.reverse);
console.log('Even Number is : ', res.Even);



const studentInfo = {
    name : 'atiqur rahman',
    age : 36,
    address : 'rajshahi',
    subject : ['software', 'javascript', 'react js', 'node js', 'php'],
    details : function(){
            return `City is : ${this.address} And Age  : ${this.age}` 
    }

}

let fullInfo = studentInfo.details();
console.log(fullInfo);

let changeVal= studentInfo.subject[4] = 'Web Developer';
console.log(changeVal);

let subjectStudent = studentInfo.subject[1];
console.log('subject is : ', subjectStudent)

// console.log('student Info : ',studentInfo);


