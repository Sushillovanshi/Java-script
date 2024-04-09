let student = [
    {
        sname: "sushil",
        sroll: 10,
        sage: 21
    },
    {
        sname: "sushant",
        sroll: 11,
        sage: 22
    },
    {
        sname: "sunil",
        sroll: 12,
        sage: 22
    }
]
console.log("after using array object");
console.log(student);


student.push({

    sname: "sush",
    sroll: 101,
    sage: 25
});
console.log("after using push ");
console.log(student);
student.indexOf({ sname: "sushil", sroll: 16, sage: 36 })
console.log("after using indexof");
console.log(student); endl;

student.pop({})
console.log("after using pop");
console.log(student); endl;

student.forEach((i)=> console.log(i));   
// for Each is a loop as well as function  allows you to 
// iterate over an array and perform an operation on each element of the array.

student.forEach((a)=> console.log(a.sname));   // printe key on using by foreach..
student.forEach((b)=> console.log(Object.values(b))); // printe values on using by foreach..

