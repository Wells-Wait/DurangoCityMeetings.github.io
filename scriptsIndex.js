function rsize(){
    x=window.innerHeight;
    document.getElementById("novS").style.height = (x).toString()+"px";
    document.getElementById("decS").style.height = (x).toString()+"px";
    document.getElementById("janS").style.height = (x).toString()+"px";
    console.log(x);
    

}
rsize()
window.addEventListener('resize', rsize);