

$(document).ready(function() {
  
  $(".galeria").fancybox({
    'helpers': {
      'title': {
        'type': 'outside'
      },
      'buttons': {
        'position': 'bottom'
      },
      'thumbs': {
        'width': 100,
        'height': 100,
        'position': 'top'
      }
    }
  });
  
  
  $("#boton1").click(function() {
    $("body").toggleClass("fondo-negro");
  });

  
});
