$(function(){
    
    $('.next').click(nextImg);
    $('.prev').click(prevImg);


  function nextImg(){
      /* referenza immagine attiva */
      var imgActive = $('.central img.active');
      var circleActive = $('.cont_balls i.active');
      /* tolgo la classe active */
      imgActive.removeClass('active');
      circleActive.removeClass('active');
      /* passare active da last a first */
      if(imgActive.hasClass('last')){
          $('.central .first').addClass('active');
          $('.cont_balls i.first').addClass('active');
      }else{
           /* aggiungo la classe active all'elemento successivo */
         imgActive.next('img').addClass('active');
         circleActive.next('i').addClass('active');
      }
      
      
      
  }

  function prevImg(){
    var imgActive = $('.central img.active');
    var circleActive = $('.cont_balls i.active');
      imgActive.removeClass('active');
      circleActive.removeClass('active');
      if(imgActive.hasClass('first')){
          $('.central .last').addClass('active');
          $('.cont_balls .last').addClass('active');
      }else{
          imgActive.prev('img').addClass('active');
          circleActive.prev('i').addClass('active');
      }
  }








});