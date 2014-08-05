//= require jquery/dist/jquery.js
//= require_tree .

$(document).ready(function(){
  $("#menu-icon").click(function(){
    $("#mobile-links").slideToggle();
  });
  $("#mobile-links").click(function(){
    $("#mobile-links").slideToggle();
  });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
    })
    $(this).addClass('active');
    
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function() {
  var div = $('#timeline-container');
  $("button.toggle").click(function() {
    $(div).slideToggle(1000, function() {

      var $timeline_block = $('.cd-timeline-block');
      //hide timeline blocks which are outside the viewport
      $timeline_block.each(function(){
        if($(this).offset().top > $(window).scrollTop()+$(window).height()*0.75) {
          $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
        }
      });
      //on scolling, show/animate timeline blocks when enter the viewport
      $(window).on('scroll', function(){
        $timeline_block.each(function(){
          if( $(this).offset().top <= $(window).scrollTop()+$(window).height()*0.75 && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
            $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
          }
        });
      });
    });
    $("body").animate({"scrollTop": div.offset().top}, 500);
  });
});