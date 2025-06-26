// const delay = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           resolve("print after 2 seconds");

//     },2000)
// })

// delay.then((message)=> console.log(message))

// const delay = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("rejected")
//     },2000)
// })
// delay.catch((message)=>console.log(message))

// function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("data loaded")
//         }, 3000);
//     })
// }

// getData().then((message)=>console.log(message))

// function check(num){
//     return new Promise((resolve,reject)=>{
//         if(num % 2 == 0){
//             resolve("num is even")
//         }else{
//             reject("num is odd")
//         }
//     })
// }

// check(4).then((msg)=>console.log(msg))
// .catch((err)=>console.log(err))


// function isPalindrome(str) {
//   return new Promise((resolve, reject) => {
//     let sum = str.toString()
//     const reversed = sum.split('').reverse().join('');

//     if (sum === reversed) {
//       resolve("Palindrome");
//     } else {
//       reject("Not a palindrome");
//     }
//   });
// }

// isPalindrome(141)
//   .then((msg) => console.log(msg))    
//   .catch((err) => console.log(err));



// let promise = new Promise((resolve,reject)=>{
//     let sucess = true

//     if(sucess){
//         resolve("it is sucsess")
//     }else{
//         reject("not sucsess")
//     }

// })
// promise.then((message)=>console.log(message))
// .catch((err)=>console.log(err))

// function getEven(num){
//     return new Promise((resolve,reject)=>{
//         if(num % 2 ==0){
//             resolve(`${num},"is even"`)
//         }else{
//             reject(`${num} is odd`)
//         }
//     })
// }

// getEven(6).then((message)=>console.log(message))
// .catch((err)=>console.log(err))

// function getOdd(num) {
//     return new Promise((resolve, reject) => {
//         if (num % 2 != 0) {
//             resolve(`${num} is odd`)
//         } else {
//             reject(`${num} is even`)
//         }
//     })
// }
// getOdd(4).then((message) => console.log(message)
// )
//     .catch((err) => console.log(err)
//     )

// function add(a,b){
//     return new Promise((resolve,reject)=>{
//         if(typeof a === "number" && typeof b === "number"){
//             resolve(a+b)
//         }else{
//             reject("enter number")
//         }
//     })
// }

// add(5,5).then((message)=>console.log(message))
// .catch((err)=>console.log(err))


// function sqr(num){
//     return new Promise((resolve,reject)=>{
//         if(typeof num === "number" ){
//             resolve(num * num)
//         }else{
//             reject("enter any number")
//         }
//     })
// }
// sqr(5).then((message)=>console.log(message))
// .catch((err)=>console.log(err))


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("data loaded")
//     },1000)
// })

// p1.then((message)=>console.log(message))

// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("error occured")
//     },2000)
// })
// p1.catch((msg)=>console.log(msg))

// let number = 5

// let p1 = new Promise((resolve,reject)=>{
//     resolve(number)
// })

// p1.then((num)=>{
//     let doubled = num * 2
//     console.log("number doubled",doubled);
//     return doubled
    
// })

// .then((num)=>{
//     let add = num + 10
//     console.log("10 added ",add);
//     return add
    
// })

// .then((num)=>{
//     let sub = num - 5
//     console.log("5 substracted",sub);
//     return sub
// })


// function boilwater(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("boil water")
//         },1000)
//     })
// }

// function addRice(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("add rice")
//         },1000)
//     })
// }

// function serve(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("served")
//         },1000)
//     })
// }

// boilwater()
// .then(addRice)
// .then(serve)
// .then((msg)=>{
//     console.log(msg);
// })
// .finally(()=>console.log("enjoy your meal")
// )


// function placeOrder(){
//     return new Promise((resolve,reject)=>{
//         resolve("order placed")
//     })
// }

// function order(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         resolve("out for delivery")
//     })
// }

// function orderReceved(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         resolve("order receved")
//     })
// }

// placeOrder()
// .then(order)
// .then(orderReceved)
// .then((msg)=>console.log(msg)
// )
// .finally(()=>console.log("enjoy your meal")
// )

// function order(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("order placed")
//         },1000)
//     })
// }

// function orderDelivery(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("out for delivery")
//         },2000)
//     })
// }

// function orderRecived(prev){
//     console.log(prev);
    
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("order deliverd")
//         },3000)
//     })
// }

// order()
// .then(orderDelivery)
// .then(orderRecived)
// .then((msg)=>console.log(msg))
// .finally(()=>console.log("enjoy your meal")
// )


// function uploadFile(filename){
//     return new Promise((resolve,reject)=>{
//         if( !filename.endsWith(".jpg")){
//            reject("upload jpg file")
//         }else{
//             resolve("file uploaded ")
//         }
//     })
// }
// uploadFile("photo.jpg")
// .then((msg)=>{console.log(msg)
//     console.log("upload sucsess");
    
// }
// )
// .catch((err)=>console.log(err)
// )

// function uploadFile(filename){
//     return new Promise((resolve,reject)=>{
//         if(filename.endsWith(".jpg")){
//             resolve("uploaded")
//         }else{
//             reject("enter .jpg files")
//         }
//     })
// }

// uploadFile("image.jpg")
// .then((msg)=>{console.log(msg)
//     console.log("upload success")}
    
// )
// .catch((err)=>console.log(err)
// )
   
// function cooked(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("cooked")
//         },1000)
//     })
// }

// function clean(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("cleaned")
//         },1000)
//     })
// }

// function wash(){
//     return new Promise((res,rej)=>{
//         setTimeout(()=>{
//             res("washed")
//         },1000)
//     })
// }

// Promise.all([wash(),clean(),cooked()])
// .then((msg)=>console.log("kitcen closed",msg)
// )


// p1 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Api1")
//     },1000)
// })

// p2 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Api2")
//     },1000)
// })

// p3 = new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("Api2")
//     },1000)
// })

// Promise.race([p1,p2,p3])

// .then((msg)=>console.log("first result",msg)
// )



// function fetchData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("data fetched")
//         },1000)
//     })
// }

// async function getdata(){
//     let result = await fetchData()
//     console.log(result);
    
// }

// getdata()


function boilWater(){
    return new Promise((resolve,reject)=>{
        resolve("water boiled")
    })
}

function addRice(){
    return new Promise((resolve,reject)=>{
        resolve("Rice added")
    })
}

function served(){
    return new Promise((resolve,reject)=>{
        resolve("food served")
    })
}

async function cook(){
    let step1 = await boilWater()
    console.log(step1);

    let step2 = await addRice()
    console.log(step2);
    
    let step3 = await served()
    console.log(step3);
    
}

cook()