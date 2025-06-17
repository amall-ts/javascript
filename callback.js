

// function greet(name,callback){
//     console.log("hello"+name);
//     callback()
// }

// function sayBye(){
//     console.log("goodbye");


// }
// greet("amal",sayBye)


// function sum(num,callback){
//     callback()
//     return num*num


// }

// function sum2(){
//     console.log("the sum is");

// }

// console.log(sum(2,sum2));

// function square(num,callback){
//     callback()
//     return num*2
// }

// function sum(){
//     console.log("square is");

// }

// console.log(square(5,sum));


// setTimeout(()=>{
//     console.log("executed after 2 mins");

// },2000)



// function show(callback){
//     callback()
// }

// function displayMessage(){
//     console.log("this is the messsage");

// }

// show(displayMessage)

// function calculate(a,b,oprators){
//     return oprators(a,b)
// }

// function add(x,y){
//     return x+y
// }

// function mul(x,y){
//     return x*y
// }

// console.log(calculate(3,4,add));
// console.log(calculate(4,5,mul));


// function calculate(a,b,num){
//     return num(a,b)
// }

// function add(x,y){
//     return x+y
// }

// function mul(x,y){
//     return x*y
// }

// console.log(calculate(2,3,add));
// console.log(calculate(3,3,mul));




// function filterArray(arr,callback){
//     for(let i of arr){
//         if(callback(i)){
//             console.log(i);

//         }
//     }
// }

// function isEven(num){
//     return num % 2 ==0
// }

// console.log(filterArray([1,2,4,6,5,7,8,9],isEven));


// function filterArray(arr,callback){
//     for(let i of arr){
//         if(callback(i)){
//             console.log(i);

//         }
//     }
// }

// function odd(num){
//    return num %2 !=0
// }

// console.log(filterArray([1,3,2,5,7,3,2,7,6],odd));


// function filterArray(arr,callback){
//     for(let i of arr){
//         if(callback(i)){
//             console.log(i);

//         }


//     }
// }

// function even(num){
//     return num % 2 ==0
// }
// console.log(filterArray([3,4,5,6,7,8,9,1,2],even));


// function greet(name, callback) {
//     console.log("heelo", name);
//     callback()
// }

// function goodBye(){
//     console.log("byee");
    
// }
// greet("heeelo",goodBye)


// function calculate(num,callback){
//     return callback(num)
// }

// function square(n){
//     return n*n
// }

// console.log(calculate("6",square));

// function oddEven(num,callback){
//     return callback(num)
// }
// function check(n){
//   if(n % 2 ==0){
//     console.log("even");
    
//   }else{
//     console.log("odd");
    
//   }
// }
// oddEven(4,check)


function calculate(a,b,callback){
   return callback(a,b)
}

function add(x,y){
    return x+y
}

function mul(x,y){
    return x*y
}

console.log(calculate(5,6,add));



