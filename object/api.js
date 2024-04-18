async function fet(){
    let  a = await fetch ("https://jsonplaceholder.typicode.com/posts")
    let result = await a.json()
    console.log(result,"\n");
    console.log(result.map((e)=>e.id));

}
fet()