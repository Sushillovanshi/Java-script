let a=10;
for(let i=1; i<=a; i++)
{
    if(i%2!=0)
    document.write(i);
} 

// ======================================================================================//

let a=parseInt(prompt("Enter a number"))
if(a>=1 && a<=10)
{
    for(let i=1 ; i<=a; i++)
   {
     document.write(i)
   }
}
else if(a>10 && a<=20)
{
    for(let i=20; i>=1; i--)
    {
       document.write(i)
    }
}
else{
    document.write("Please enter a value")
}