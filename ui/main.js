console.log('Loaded!');
var element=document.getElementById("firstid");
element.innerHTML='New and interesting stuffs';
var img = document.getElementById("madi");
var marginRight  =0;
function moveLeft(){
    marginRight=marginRight+2;
    img.style.marginRight=marginRight+'px';
}
img.onclick = function() {
    var element=setInterval(moveLeft, 45);
    img.style.marginLeft = '120px';
};