async function first(){
    let  a = await fetch ("http://localhost:3000/student")
    let result = await a.json()
    console.log(result,"\n");
    console.log(result.map((e)=>e.id));

}
first()

// JOSN =>>  javaScript object notation  :

