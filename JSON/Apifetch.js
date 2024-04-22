// async function first(){
//     let  a = await fetch ("http://localhost:3000/student")
//     let result = await a.json()
//     console.log(result,"\n");
//     console.log(result.map((e)=>e.id));

// }
// first()

// JOSN =>>  javaScript object notation  :


//   sedcond

async function second (){
    let b = await fetch("http://localhost:3000/student")
    let re = await b.json()
    document.write(re.map((e)=>`
    <ul> ${e.name}</ul>
    <ul> ${e.id}</ul>
    <ul> ${e.city}</ul>`).join(""));
}
second()