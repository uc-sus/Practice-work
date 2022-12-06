 var myFriends = [ 'ramesh','arjun','vishal',true,12];
// console.log(myFriends[1]);

//traversal in array
// var myfriends = new Array;
// var myFriends = [ 'ramesh','arjun','vishal',true,12];
// console.log(myFriends);
// console.log(myFriends[1]);
// console.log(myFriends.length);

// for(i=0;i<myFriends.length;i++){
//     console.log(myFriends[i]);
// }

//for in loop => return index number

// for(let elements in myFriends){
//     console.log(elements);
// }


// for(let ele in myFriends){
//     console.log(ele);
// }

// for of loop => retrurn elements of array
// for(let ele of myFriends){
//     console.log(ele);
// }

// for each loop =>

// myFriends.forEach(function(ele, index,array){
//     console.log(ele + " index :"+ index +" Array" + array);

// });

// myFriends.forEach((ele,index,array)=>{
//     console.log(`${ele} index: ${index} Array ${array}`);
// })

//Searching and filter in an 😒
// var myFriends = [ 'ramesh','arjun','vishal',true,12,"arjun"];
// console.log(myFriends.indexOf("arjun"));
// // console.log(myFriends.includes("Arjun"));
// console.log(myFriends.includes("arjun"));


// find() function
// const prices = [100,150,50,30,2312,213,3112];
//price>400

// const findEle = prices.find((currVal)=>{
//     return currVal<400;
// });

// console.log(findEle);

// console.log(prices.find((currVal)=> currVal<400));
// console.log(prices.findIndex((currVal)=> currVal<400));

//filter() method

// const prices = [100,150,50,30,2312,213,3112];
// const newPriceTag =prices.filter((elem,index) =>{
//     return elem<400;
// });
// console.log(newPriceTag);

// console.log(prices.filter((elem,index)=> elem<400));


//HOw to sort an Array
// console.log(prices.sort());
// console.log(prices.sort((elem,index)=> elem));

// perform curd
// var myFriends = [ 'ramesh','arjun','vishal',true,12,"arjun"];
// myFriends.push("Sushant");
// // console.log(myFriends);
// // console.log(coun t);
// const count = myFriends.unshift("Sushant");
// // console.log(count)
// console.log(myFriends);

// const myNum =  [ 2,4,6,7,8,3];
// // console.log(myNum.unshift(10,12));
// // console.log(myNum.shift(15,18));
// console.log(myNum);
// console.log(myNum.pop());
// console.log(myNum);

const months = ["jan","march","april","june","July"];
// const newMonth = months.splice(5,0,"Dec");
// console.log(months.push("Dec"));
// console.log(months);
console.log(months.splice());
const upDate = months.splice(1,1,"March");
console.log(months);

// map method............

// returns a new array containing the results of calling a function on every element in this array

const myNum =  [ 2,4,6,7,8,3];
 let newArr = myNum.map((curElem,index,arr)=>{
    return curElem>2;
 })
 console.log(myNum);

//  console.log(newArr);

//  let newArr = myNum.map((curElem,index,arr)=>{
//     return `Index no. = ${index} and them value is ${curElem} belong to ${arr}`
//  });
//  console.log(myNum);
//  console.log(newArr);
//  let newArr1 = myNum.forEach((curElem,index,arr)=>{
//     return `Index no. = ${index} and them value is ${curElem} belong to ${arr}`
//  });  
// //  console.log(myNum);
//  console.log(newArr1);


//find square root of each element in array
// const myNum =  [ 25,16,36,49];

// let sqrrt = myNum.map((elem,index,array)=>{
//    return `square root is ${Math.sqrt(elem)}`
// })
// console.log(sqrrt);

// 2nd probloem


// let scnd = myNum.map((elem,index,array)=>{
//    return elem*2;
// }).filter((elem)=>{
//    return elem>10;
// }).reduce((accumulator,elem,index,arr)=>{
//    return accumulator+= elem;
// });
// console.log(scnd);
// console.log(myNum);

//reduce method.........












