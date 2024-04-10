// let student = [
//     {
//         sname: "sushil",
//         sroll: 10,
//         sage: 21
//     },
//     {
//         sname: "sushant",
//         sroll: 11,
//         sage: 22
//     },
//     {
//         sname: "sunil",
//         sroll: 12,
//         sage: 22
//     }
// ]
// console.log("after using array object");
// console.log(student);


// student.push({

//     sname: "sush",
//     sroll: 101,
//     sage: 25
// });
// console.log("after using push ");
// console.log(student);
// student.indexOf({ sname: "sushil", sroll: 16, sage: 36 })
// console.log("after using indexof");
// console.log(student); endl;

// student.pop({})
// console.log("after using pop");
// console.log(student); endl;

// student.forEach((i)=> console.log(i));   
// // for Each is a loop as well as function  allows you to 
// // iterate over an array and perform an operation on each element of the array.

// student.forEach((a)=> console.log(a.sname));   // printe key on using by foreach..
// student.forEach((b)=> console.log(Object.values(b))); // printe values on using by foreach..



//     ============ // 10/4/2024   =========================


// let emp = [
//     {
//         name: "sushil",
//         age: 21,
//         status: "singal"
//     },
//     {
//         name: "nitin",
//         age: 24,
//         stauts: "mingal"
//     },
//     {
//         name: "nitin",
//         age: 25,
//         stauts: "mingal"
//     },
// ]
// //  let p = emp.map((i)=>{return i.name})
// //  console.log(p);

// let m = emp.filter((t) => { return t.age > 21 && t.age< 25})
// console.log(m);


let student = [
    {
        name: "sushil",
        age: 10,
        status: "singal",
        roll:1
    },
    {
        name: "nitin",
        age: 12,
        roll:2,
        place:"mandideep"
    },
    {
        name: "suraj",
        age: 13,
        roll:3,
        place:"mandideep"
    },
    {
        name: "anil",
        age: 14,
        roll:4,
        place:"mandideep"
    },
    {
        name: "mukesh",
        age: 15,
        roll:5,
        place:"mandideep"
    },
    {
        name: "ayush",
        age: 16,
        roll:6,
        place:"mandideep"
    },
    {
        name: "neelam",
        age: 17,
        roll:7,
        place:"mandideep"
    },
    {
        name: "ayushi",
        age: 18,
        roll:8,
        place:"mandideep"
    },
    {
        name: "muskan",
        age: 19,
        roll:9,
        place:"mandideep"
    },
    {
        name: "saloni",
        age: 20,
        roll:10,
        place:"mandideep"
                
    },
    
    
]
function fun(){
        student.forEach((i)=> console.log(i.name));
}
