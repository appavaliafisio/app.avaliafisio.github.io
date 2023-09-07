$(document).ready(function() {
    var myCarousel = $('#myCarousel');
    var nextButton = $('[href="#myCarousel"][data-bs-slide="next"]');
    var prevButton = $('[href="#myCarousel"][data-bs-slide="prev"]');
    var activeItemIndex = myCarousel.find('.carousel-item.active').index();
    
    // Desabilitar o evento de clique do botão "Anterior" inicialmente
    prevButton.attr('disabled', true);
    
    myCarousel.on('slid.bs.carousel', function() {
      activeItemIndex = myCarousel.find('.carousel-item.active').index();
      var totalItems = myCarousel.find('.carousel-item').length;
      if (activeItemIndex === (totalItems - 1)) {
        nextButton.attr('disabled', true);
      } else {
        nextButton.attr('disabled', false);
      }
  
      if (activeItemIndex === (0)) {
        prevButton.attr('disabled', true);
      } else {
        prevButton.attr('disabled', false);
      }
  
    });
  });
  