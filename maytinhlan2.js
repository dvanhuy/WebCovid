
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
}
function ac(){
    b.innerHTML="";
    document.getElementById("cuoicungcungra").innerHTML="";
}
function sothutu(x){
    var stt;
    stt = x.indexOf(" ");
    return stt;
    }
function travesotruoc(x){
    var stt=sothutu(x);
    if (stt +2 == 1 ) stt=0;  
    var kqua=Number(x.substring(0,stt));
    return kqua;
}
function travedau(x){
    var stt=sothutu(x);
    if (stt +2 == 1 ) return 0 
    else{
    var kqua=x.substring(stt+1,stt+2);
    return kqua;}
}
function travechuoisau(x){
    var stt=sothutu(x);
    if (stt +2 == 1 ) stt=-3; 
    var kqua=x.substring(stt+3,x.length);
    return kqua;
}
function del(){
    var x=b.innerHTML;
    if (x.lastIndexOf(" ") ==  x.length-1) x= x.substring(0,x.length-2);
    x= x.substring(0,x.length-1);
    b.innerHTML=x;
}
var n;
function bang(){
    var chuoitrave=b.innerHTML;
    var a= new Array();
    var kqdau;
    for (var i=1;i<30;i++) {
    var sotruoc=travesotruoc(chuoitrave);
    var dau=travedau(chuoitrave);
    var chuoitrave=travechuoisau(chuoitrave);
    a[i]=sotruoc;
    kqdau[i]=dau;
    alert(kqdau);
    if (sotruoc ==0){
        a[i]=Number(chuoitrave); 
        n=i;
        break;
    }
                                }
}
/* function bang(){
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
        document.getElementById("cuoicungcungra").innerHTML="= "+kq;
} */
b.innerHTML="";