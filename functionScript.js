const moveRight = function(imageObject)
{
    imageObject.style.position= 'relative';
    imageObject.style.left = '0px';
    imageObject.style.width = '200px';    
id = setInterval (function(){
    position_bird = parseInt(imageObject.style.left); 
    if (position_bird < parseInt(window.innerWidth)-parseInt(imageObject.style.width))
     {
        imageObject.style.left = position_bird + 10 + 'px';
     }
     else 
     {
        clearInterval(id);
        imageObject.classList.add("flip");
        moveLeft(imageObject,position_bird);
     }

},50);
}
const moveLeft = function(imageObject,position_bird)
{ 
id = setInterval (function(){
    position_bird = parseInt(imageObject.style.left);
    
    if (position_bird >= 0 )
     {
        imageObject.style.left = position_bird - 10 + 'px';
     }
     else 
     {  clearInterval(id);
        imageObject.classList.remove("flip");
        moveRight(imageObject);
     }
},50);
}