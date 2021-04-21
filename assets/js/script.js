$(function(){
    
    $('.next').click(nextImg);
    $('.prev').click(prevImg);

    /* funzione immagine successiva */
  function nextImg(){
      /* referenza immagine attiva */
      var imgActive = $('.central img.active');
      var circleActive = $('.cont_balls i.active');
      /* tolgo la classe active */
      imgActive.removeClass('active');
      circleActive.removeClass('active');
      /* passare active da last a first */
      
      if(imgActive.next('img').length === 0){
          $('.central img').first().addClass('active');
          $('.cont_balls i').first().addClass('active');
      }else{
           /* aggiungo la classe active all'elemento successivo */
         imgActive.next('img').addClass('active');
         circleActive.next('i').addClass('active');
      }
  }



    /* funzione immagine precedente */
  function prevImg(){
    var imgActive = $('.central img.active');
    var circleActive = $('.cont_balls i.active');
      imgActive.removeClass('active');
      circleActive.removeClass('active');
      if(imgActive.prev('img').length === 0){
          $('.central img').last().addClass('active');
          $('.cont_balls i').last().addClass('active');
      }else{
          imgActive.prev('img').addClass('active');
          circleActive.prev('i').addClass('active');
      }
  }



  /* per generare i pallini devo sapere quante foto ci sono */
   /* col ciclo each() percorro tutta la collection di immagini e ottengo l'index che mi serve per capire quale è il primo (===0) */

   $('.central img').each(function(index, element){
     var cont_balls = $('.cont_balls');
     /* creo una stringa vuota perche di default non c'è la classe active */
     var active = "";
     /* diventa active solo nell elemento 0 */
     if(index === 0) active = "active";
     /* genero la stringa da stampare */
     var tag = '<i class="fas fa-circle ' + active + '"></i>';
     /* la appendo a cont_balls */
     cont_balls.append(tag);

   });

   
/* aggiungo un listner click a tutti i (.cont_balls i) generati dinamicamente */
$('.cont_balls i').on('click', function() {

  /* l'index dell elemento cliccato mi serve per cercare la img corrispondente */
  var index = $(this).index();

  /* rimuovo active dagli elementi attivi */
  $('.cont_balls i.active').removeClass('active');
  $('.central img.active').removeClass('active');

  /* con eq cerco l'elemento con indice index e gli aggiungo la classe active */
  $('.central img').eq(index).addClass('active');
  /* all elemento cliccato aggiungo la classe active */
  $(this).addClass('active');

});
  

});