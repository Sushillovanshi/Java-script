/*let car1 = "rogue";
let car2 = "Volvono";
let car3 = "BMW";
const cars = ["Saab", "Volvo", "BMW"];*/

// let ar =[1,2,3,4,5]
// let sum=0;
// for(let a=0; a<5 ; a++)
// {
//     sum = sum + ar [a]
// }
// console.log(sum)

// let ro=[];
// for(let a=0; a<5;a++)
// {
//     ro[a]=parseInt(prompt("enter a number"));
// }
// for(let a=0; a<5; a++)
// {
//     console.log(ro[a]);
// }

// -------------------- 1/4/2024 ---------------------------------//

//  let ar =[2,2.3,'q',"cybrom"];
//  document.write(ar[0] +ar[1]);
 

//========================================================================================


//  let ar1=[];
//  for(let a=0; a<5; a++){
//     ar1[a]=parseInt(prompt("enter a any 5 number"))
//  }

//===========================================================================================

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let a=0; a<10; a++){
//     arr[a]=parseInt(prompt("enter a number"))
// }

// --------------------------------------------------------------------------

let ar =[];
for(let a=0; a<10; a++){
    ar [a] = parseInt(prompt("Enter any 10 number"));

}

for (let i=0; i<10; i++){
    if(ar[i]%2==0){
        document.write(ar[i]* ar[i])
    }
}