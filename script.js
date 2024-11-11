function pick(val)
{
    document.getElementById("a").value +=val;
}
function clr()
{
    document.getElementById("a").value="";
}
function solve()
{
    var x=document.getElementById("a").value;
    var y=eval(x);
    document.getElementById("a").value=y;
}
function square()
{
     const num=parseFloat(document.getElementById("a").value);
     const result=num*num;
     document.getElementById("a").value=result;      
}   
function root()
{
     const num=parseFloat(document.getElementById("a").value);
     const result=num*num*num;
     document.getElementById("a").value=result;      
}  
function clearentity()
{
    document.getElementById("a").value=",";
} 