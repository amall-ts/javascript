

// let num =2

// function positive(num){
//     if(num>0){
//         console.log("number is positive");

//     }else if(num<0){
//        console.log("number is negative");

//     }else{
//         console.log("num is zero");

//     }
// }

// positive()



// let num=2

// function oddEven(num){
//     if(num % 2 == 0){
//         console.log("num is even");

//     }else{
//         console.log("num is odd");

//     }
// }

// oddEven(2)


// function reversed(str){
//     let reversed="";
//     for(let i=str.length-1;i>=0;i--){
//          reversed +=str[i]
//     }
//     return reversed;
// }

// console.log(reversed("heelo"));


// function reversed(str){
//     let revrese=""
//     for(let i=str.length-1;i>=0;i--){
//         revrese +=str[i]
//     }
//     return revrese
// }
// console.log(reversed("hello"));

// let numbers=[1,4,6,8,45]

// function min(arr){

//     let max=arr[0]

//     for(let i=1;i<arr.length;i++){
//         if(arr[i]>max){
//             max=arr[i]
//         }
//     }
//     return max

// }

// console.log(min(numbers));


// function max(arr) {
//     let max = arr[0]
//     for (i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i]
//         }

//     }
//     return max
// }
// console.log(max([34, 35, 64, 23]));


// function add(a,b){
//     console.log(a+b);

// }
// add(3,4)


// function printNumbers(){
//     for(i=1;i<=5;i++){
//         console.log(i);

//     }
// }
// printNumbers()


// function reversed(str){
//     let reversed=""
//     for(let i=str.length-1;i>=0;i--){
//         reversed +=str[i]
//     }
//     console.log(reversed);

// }
// reversed("helloo")

// let num = 6

// function square(num){
//       return num*num

// }
// console.log(square(num));


// function reversed(str){
//     let reverse =""
//     for(let i=str.length-1;i>=0;i--){
//         reverse +=str[i]
//     }
//     console.log(reverse);

// }
// reversed("ooleh")


// function printNumbers(num1,num2,num3){
//     console.log(`numbers are ${num1},${num2},${num3}`);

// }
// printNumbers(2,4,5)

// function printName(name,place){
//     console.log(`heelo my name is${name},iam from ${place}`);

// }
// printName("amal","kerala")


// function printName(name,city){
//     console.log(`hello iam ${name} from ${city}`);

// }
// printName("neymar","brazil")

// function addNumbers(){
//     let sum =0
//     for (let i=0;i<arguments.length;i++){
//         sum +=arguments[i]
//     }
//     console.log(`sum of all numbers =${sum}`);

// }

// addNumbers(2,4,5,3,3)

// function addNumbers(){
//     let sum=0
//     for(let i=0;i<arguments.length;i++){
//         sum += arguments[i]
//     }
//     console.log(`some of numbers =${sum}`);

// }
// addNumbers(5,5,5,5)


// function square(num){
//   return num*num
// }
// console.log(square(5));

// function greet(name){
//     return `heelo ${name}`
// }
// console.log(greet("amal"));

// function add(num1,num2){
//     return num1 + num2
// }
// console.log(add(2,4));

// function areaRec(length,width){
//     return `area of rec is ${length * width}`
// }
// console.log(areaRec(2,3));

// function square(a,b){
//     return a*b
// }
// console.log(square(10,10));

// let sumArray=function(arr){
//     let sum =0
//     for(let i=0;i<arr.length;i++){
//  sum += arr[i]
//     }
//     return sum
// }

// console.log(sumArray([5,5,5,5]));

// let array= function(arr){
//     sum=0
//     for(let i=0;i<arr.length;i++){
//         sum += arr[i]
//     }
//     return sum
// }
// console.log(array([10,10,1,1]));


// function multiply(a,b=3){
//     return a * b
// }
// console.log(multiply(4,5));
// console.log(multiply(3));


// function sum(numbers){
//     let total=0
//     for(let num of numbers){
//         total += num
//     }
//     return total
// }
// console.log(sum([5,5]));

// function reverse(str){
//     let reversed=""
//     for(let i=str.length-1;i>=0;i--){
//          console.log(str[i]);

//     }
// }
// reverse("hello")


// function add(a,b){
//     return a+b
// }
// console.log(add(5,7));

// function oddEven(num){
//   if(num % 2 == 0){
//     console.log("even");

//   }else{
//     console.log("odd");

//   }
// }
// oddEven(5)


// let arr=[3,4,53,1,23]

// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);

// }


// function plaindrome(num){
//     let str = num.toString()

//     let reversed = str.split('').reverse().join('')

//     if(reversed == str){
//         console.log("palindrome num");

//     }else{
//         console.log("not palindrome");

//     }
// }
// plaindrome(432)


// function fact(num) {
//     let result = 1
//     for (i = 1; i <= num; i++) {
//         result *= i
//     }
//     return result
// }
// console.log(fact(5));


function fact(n){
    let result=1
    for(let i=1;i<=n;i++){
        result *= i
    }
    return result
}
console.log(fact(4));














