
var s,d;
var x=0;
const b=document.querySelector(".manhinh");
function so(s) {
    b.innerHTML=b.innerHTML+s;
}
function dau(d){
    switch(d){
    case 21:
        b.innerHTML=b.innerHTML+" &#215; ";break;
    case 22:
        b.innerHTML=b.innerHTML+" &#247; ";break;
    case 23:
        b.innerHTML=b.innerHTML+" &#43; ";break;
    case 24:
        b.innerHTML=b.innerHTML+" &#8722; ";break;                    
    }
    x=x+1;
}
function ac(){
    b.innerHTML="";
}
function bang(){
    var kq=0;
    var bienso;
    var sokt = b.innerHTML.length;
    var kt=b.innerHTML;
    var kt1=b.innerHTML;
    if (kt.indexOf(" ")+2 == 1) kq=Number(kt);
    else{
    // while (sokt == 0)
    // do {
        bienso = kt.indexOf(" ");
        kq=Number(kt1.substring(0,bienso));
        var dautruoc=kt.substring(bienso,bienso+3);
        kt = kt.substring(bienso+3,sokt);
        if ( dautruoc == (" "+document.getElementById("daunhan").innerHTML+" "))
        kq=kq*Number(kt);
        if ( dautruoc == (" "+document.getElementById("dauchia").innerHTML+" "))
        kq=kq/Number(kt);
        if ( dautruoc == (" "+document.getElementById("daucong").innerHTML+" "))
        kq=kq+Number(kt);
        if ( dautruoc == (" "+document.getElementById("dautru").innerHTML+" "))
        kq=kq-Number(kt);
    // }
        }
    var kketqua= document.getElementById("cuoicungcungra");
    kketqua.innerHTML="= "+kq;
}
b.innerHTML="";