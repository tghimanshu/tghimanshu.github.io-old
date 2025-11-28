/**
 * @fileoverview Handles smooth scrolling for navigation links and active link switching based on scroll position.
 * Uses jQuery for DOM manipulation and event handling.
 */

$(document).ready(function() {
  
  var scrollLink = $('.scroll');
  
  /**
   * Smooth scrolling event handler.
   * Intercepts clicks on links with class 'scroll' and animates scrolling to the target section.
   * Also toggles the mobile menu if screen width is small.
   */
  scrollLink.click(function(e) {
    e.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top - 50 // - $('.nav')[0].height
    }, 1000 );
    if($(window).width() <= 678){
      $('.hamburger i').toggleClass('fa-times',1000);
      $('nav .menu').fadeToggle();
    }
  });
  
  /**
   * Active link switching on scroll.
   * Highlights the navigation link corresponding to the currently visible section.
   */
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function() {
      
      var sectionOffset = $(this.hash).offset().top - 60;
      
      if ( sectionOffset <= scrollbarLocation ) {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active');
      }
    })
    
  })
  
})