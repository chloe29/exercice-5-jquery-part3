$(function(){
      //on détermine la hauteur de l'écran
      // La méthode .height() est recommandée lorsque la hauteur d'un élément doit être utilisée dans un calcul mathématique.
      var heightWindow = $(window).height();
      //on détermine la largeur de l'écran
      var widthWindow = $(window).width();
      //.keydown() signifie "quand j'appuie sur une touche", on donne "e" (pour "event") en paramètre de la fonction
      $('#text').keydown(function(e){
        //on détermine la position horizontale de la div
        //La méthode .offset() nous permet de récupérer la position actuelle d'un élément par rapport au document.
        var positionSquareX = $('#carre').offset().left;
        //on détermine la position verticale de la div
        var positionSquareY = $('#carre').offset().top;
        //L'instruction switch évalue une expression(e.keyCode) et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.
        //Les Keycodes sont des nombres associées aux touches du clavier gérés par des évènements Javascript.
        //quand j'appuie sur la touche sélectionnée(keyCode), si l'expression e.keyCode est vérifié on éxecute le code.Si on presse tel touche..exécute le code correspondant
        switch (e.keyCode) {
        //touche directionelle vers la droite
          case 39: //dans le cas ou 39 correspond à keycode, je vais faire tout ce qu'il y a dedans
            if (positionSquareX >= (widthWindow -110)) {
              $('#carre').css('margin-left','0');
            } else {
              $('#carre').css('margin-left','+=10px'); //+=10px permet de déplacer #carre de 10px vers la gauche
            }
            //L'instruction break permet de s'assurer que seules les instructions associées à ce cas seront exécutées
            break;
        //touche directionelle vers la gauche
        //si la valeur du switch correspond au keyCode 37
          case 37:
          if (positionSquareX <= 0) {
            $('#carre').css('margin-left', widthWindow -110);
          } else {
            $('#carre').css('margin-left','-=10px');
          }
            break;
        // touche directionelle vers le haut
          case 38:
          if (positionSquareY <= 0) {
            $('#carre').css('margin-top', widthWindow -110);
          } else {
            $('#carre').css('margin-top','-=10px');
          }
            break;
        //touche directionelle vers le bas
          case 40:
          if (positionSquareY >= (heightWindow-110)) {
            $('#carre').css('margin-top', '0');
          } else {
            $('#carre').css('margin-top','+=10px');
          }
            break;
        }
      });
    });
  /*
  //définie la position X et Y initiale
  var positionX = 0;
  var positionY = 0;
  $('#text').keydown(function(e){
    var key = e.which;
    var heightEcran = $(window).height() -150;
    var widthEcran = $(window).width() -100;
    if (key == 39){ //fleche vers la droite
      positionX = positionX + 10;
      if (widthEcran >= positionX) {
        $('#carre').css('margin-left', positionX);
      } else if (widthEcran < positionX){
        positionX = 0;
        $('#carre').css('margin-left', positionX);
      }
    } else if (key == 37){//fleche vers la gauche
      positionX = positionX -10;
      if (positionX > 0) {
        $('#carre').css('margin-left', positionX);
      } else if (positionX < 0){
        positionX = widthEcran;
        $('#carre').css('margin-left', positionX);
      }
    } else if (key == 38){ //fleche vers le haut
      positionY = positionY -10;
      if (positionY > 0) {
        $('#carre').css('margin-top', positionY);
      } else if (positionY < 0) {
        positionY = heightEcran;
        $('#carre').css('margin-top', positionY);
      }
    } else if (key == 40) { //fleche vers le bas
      positionY = positionY +10;
      if (positionY < heightEcran) {
        $('#carre').css('margin-top', positionY);
      } else if (positionY > heightEcran) {
        positionY = 0;
        $('#carre').css('margin-top', positionY);
      }
    }
  });*/
