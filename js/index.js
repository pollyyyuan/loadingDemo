;(function() {
  // 兼容animationEnd方法
   function whichAnimationEvent(){
   var t,
       el = document.createElement('surface'),
       animations = {
         'animation':'animationend',
         'WebkitAnimation':'webkitAnimationEnd'
       };
       for(t in animations){
           if( el.style[t] !== undefined ){
               return animations[t];
           }
       }
   }
    var animationEvent = whichAnimationEvent();
    var dom=$('.box i');
    var lastIndex=0,
        current;
        moveFn();
    function moveFn(){
        current=dom.eq(lastIndex);
        current.addClass('move');
        current.get(0).addEventListener(animationEvent, function() {
         // console.log($(this));
          $(this).removeClass('move');
          console.log(lastIndex);
         if(lastIndex==dom.length-1)
        {
          lastIndex=0;
        }else{
          lastIndex++;
        }
        moveFn();
    });
   }
 
  })();