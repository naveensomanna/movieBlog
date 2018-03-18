import $ from 'jquery';
$(function(){
    var width=280;
    var animationSpeed=2000;
    var pause=3000;
    var currentSide=1;
    var $slider =$('#fade_carousel_blog');
    var $slideContainer=$slider.find('#img_fade');
    var $slide=$slideContainer.find('#slide .comedy_fade_in');
    setInterval(function(){
     $slideContainer.animate({'margin-left':'-='+width},animationSpeed,function(){
        currentSide++;
        if(currentSide===$slide.length){
          currentSide=1;
          $slideContainer.css('margin-left',0);
        }
       }
      );
    },pause);
  });