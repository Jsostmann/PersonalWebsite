$(document).ready(function(){
    var intro = "I'm James Ostmann";
    var enjoy = "I <span style='Font-family: ZCOOL KuaiLe,cursive;'>enjoy</span>"
    var first = '<i style="font-weight: bold">Programming</i>';
    var second = '<span style="color: #002e74 ">Web</span> <span style="color:#fdbf42">Development</span>';
    var third = '<span style="font-family: Orbitron, sans-serif;">Algorithms</span>';
    var fourth = '<span style="font-family: Monoton, cursive;">Data Structures</span>';
    var outro = '<span>I hope you enjoy my webpage! </span>'

var typed = new Typed('.element', {
    strings: [intro, enjoy, first, second, third, fourth, outro],
    typeSpeed: 75,
    backSpeed: 75,
    cursorChar: ' >',
    loop: true
  });

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar-light");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

      $('.navbar-collapse').on('show.bs.collapse', function() {
        $(".navbar-light").toggleClass('hide');

      });

      $('.navbar-collapse').on('hidden.bs.collapse', function() {
        $(".navbar-light").toggleClass('hide');
      });


      AniJS.createAnimation([{
        event: 'mouseover',
        eventTarget: '[name^=logo]',
        behaviorTarget: 'target',
        behavior: 'tada animated',
        function(e, animationContext){
          animationContext.run()
      }
    }]);
  
});