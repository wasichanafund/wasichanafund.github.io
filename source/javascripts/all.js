//= require jquery/dist/jquery.js
//= require owl.carousel.min.js
//= require magnific-popup/dist/jquery.magnific-popup.js
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

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    nav: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        navText: false        
      },
      600:{
        items:1,
        nav:true,
        navText: false        
      },
      1000:{
        items:1,
        nav:true,
        navText: false
      }
    }
  });
});

$(document).ready(function(){
  $('.jade').magnificPopup({
    items: {
      src: '#jade',
      type: 'inline',
      modal: true
    }
  });
  $('.nelly').magnificPopup({
    items: {
      src: '#nelly',
      type: 'inline',
      modal: true
    }
  });
  $('.daniel').magnificPopup({
    items: {
      src: '#daniel',
      type: 'inline',
      modal: true
    }
  });  
  $('.charing').magnificPopup({
    items: {
      src: '#charing',
      type: 'inline',
      modal: true
    }
  });
  $('.emily').magnificPopup({
    items: {
      src: '#emily',
      type: 'inline',
      modal: true
    }
  });
  $('.jacob').magnificPopup({
    items: {
      src: '#jacob',
      type: 'inline',
      modal: true
    }
  });
  $('.rishi').magnificPopup({
    items: {
      src: '#rishi',
      type: 'inline',
      modal: true
    }
  });  
  $('.victor').magnificPopup({
    items: {
      src: '#victor',
      type: 'inline',
      modal: true
    }
  });
  $('.sylvanna').magnificPopup({
    items: {
      src: '#sylvanna',
      type: 'inline',
      modal: true
    }
  });
  $('.helene').magnificPopup({
    items: {
      src: '#helene',
      type: 'inline',
      modal: true
    }
  });
  $('.emilyr').magnificPopup({
    items: {
      src: '#emilyr',
      type: 'inline',
      modal: true
    }
  });
  $('.hannah').magnificPopup({
    items: {
      src: '#hannah',
      type: 'inline',
      modal: true
    }
  });                
});




$(document).ready(function() {
  var donation = '.amount'
  $(donation).on('click', function(){
    $(donation).removeClass('donation');
    $(this).addClass('donation');
  });
});

$(document).ready(function(){

  $(".amount:first-child").click(function() {
    $(".your-donation p").html("Will provide one girl six months worth of sanitary napkins supply.");
    $('input[name="amount"]').val("$25.00")
  });
  $(".amount:nth-child(2)").click(function() {
    $(".your-donation p").html("Will provide one girl a year's worth of sanitary napkins supply, giving them a change to reclaim their dignity and transform communities.");
    $('input[name="amount"]').val("$50.00")
  });
  $(".amount:nth-child(3)").click(function() {
    $(".your-donation p").html("Will provide 50 girls access to health education that will equip each girl with the necessary skills to make informed life decisions.");
    $('input[name="amount"]').val("$100.00")  
  });
  $(".amount:nth-child(4)").click(function() {
    $(".your-donation p").html("Will help us support a new school by providing one month's supply of sanitary napkins to approximately 100 girls.");
    $('input[name="amount"]').val("$250.00")  
  });
  $(".amount:nth-child(5)").click(function() {
    $(".your-donation p").html("Will help expand the Wasichana Fund's reach to two schools, giving girls the change to win back six weeks of school each year.");
    $('input[name="amount"]').val("$500.00")  
  });   
  $(".amount:nth-child(6)").click(function() {
    $(".your-donation p").html("Enter the amount you wish to donate.");
    $('input[name="amount"]').val("$CAD")  
  });            
});



$(document).ready(function() {
  $('label:contains("Amount")').each(function(){
    $(this).html($(this).html().split("Amount").join(""));
    $('input[name="amount"]').val("$CAD")
  });
});

$(document).ready(function() {
  resizeBg();
});

window.onresize = function(event) {
  resizeBg();
}

function resizeBg() {
  var vpw = $(window).width();
  var vph = $(window).height();
  $('.full-height').css({'height': vph + 'px'});    
}

