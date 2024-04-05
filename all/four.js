let c = document.getElementById('count');
let d = document.getElementById('count1');
let a = document.getElementById('count2');
let v = 0;
let b= prompt(document.getElementsByClassName('rogue'));
function inc(){
v++;
c.innerHTML=v;
d.innerHTML=v;
a.innerHTML=v*100;
}

function dec(){
if(v>0){
v--;
c.innerHTML=v;
d.innerHTML=v;
a.innerHTML=v;
}

}
