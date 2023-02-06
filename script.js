
document.getElementById("button1").onclick = function() {
    var zmienna1=document.getElementById("in1").value
    var zmienna2=document.getElementById("in2").value
    if(zmienna1==1){
        zmienna1=3.5
    }
    else if(zmienna1==2){
        zmienna1=4
    }
    else{
        zmienna1=0
    }
wynik=zmienna1*zmienna2;
    document.getElementById("wynik1").innerHTML = wynik; 
}