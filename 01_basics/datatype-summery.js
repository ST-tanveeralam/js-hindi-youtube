//primitive 

//7 types: string , number, boolean, null, undefined, symbole, BigInt
const score =100;
const scoreValue =100.6
let city= null

console.log(typeof city);




//refrence (non primitive)
// array, object,function

const hero =["shakti,an","naagaraj", "dogo"];

console.log(typeof hero)

let myObj ={
    name:"tanu",
    age: 26,
    city: "delhi"

}
console.log(typeof myObj);


const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction)



//=============================================================================

//stack ( primitive), heap( non- primitive)

let city1 = "Delhi";
let updateCity = city1;
 updateCity="Bangalor";

 console.log(city1);
 console.log(updateCity);


let profile = {
    name: "tanu",
    email:"tanu@gmail.com",
    city:"Delhi"
}
profile.email="taniya@gmail.com"
console.log(profile);

