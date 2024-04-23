// async function first(){
//     let  a = await fetch ("http://localhost:3000/student")
//     let result = await a.json()
//     console.log(result,"\n");
//     console.log(result.map((e)=>e.id));

// }
// first()

// JOSN =>>  javaScript object notation  :


//   sedcond

// async function second (){
//     let b = await fetch("http://localhost:3000/student")
//     let re = await b.json()
//     document.write(re.map((e)=>`
//     <ul> ${e.name}</ul>
//     <ul> ${e.id}</ul>
//     <ul> ${e.city}</ul>`).join(""));
// }
// second()

//========================= 23/4/2024

async function demo() {
    let a = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
    let re = await a.json()
    let ot = ""
    let pl = document.getElementById("re")
    let p = re.map((e) => ot +=
        `
    <tr>
        <td>${e.id}</td>
        <td>${e.albumId}</td>
        // <td>${e.body}</td>
        <td>${e.title}</td>
        <td> <img src="${e.url}"></td>
    </tr>
    `

    )
    pl.innerHTML = p;

    // let u = re.map((e)=>`
    // <div> <img src="${e.url}"> </div>
    // `)
    // document.getElementById('he').innerHTML=u
}
demo()