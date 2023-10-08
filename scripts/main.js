$(document).ready(function(){
  if ($(window).width() > 700){
    $('#carousel').hide();
    $('#mocarousel').hide();
    $('section').hide();
    $('.title').fadeIn(1500);
    $('.jack').fadeIn(1500);
    $('.heading').fadeIn(1500);
    $('.heading').delay(800).fadeOut();
    $('#carousel').delay(3000).fadeIn();
    $(window).resize(function() {
      if ($(window).width() < 700) {
        window.location.reload();
      }})
} else {
  $('#carousel').hide();
  $('#mocarousel').hide();
  $('section').hide();
  $('.title').fadeIn(1500);
  $('.jack').fadeIn(1500);
  $('.heading').fadeIn(1500);
  $('.title').delay(800).fadeOut();
  $('.heading').delay(800).fadeOut();
  $('#mocarousel').delay(3000).fadeIn();
  $('.scrollFade').delay(3000).fadeIn();
  $(window).resize(function() {
    if ($(window).width() > 700) {
      window.location.reload();
    }})
}
});


$(document).on('click', '.jack', function (event) {
    $('#index').stop(true,true).fadeOut().css('display', 'none');
    $('.grid').stop(true,true).fadeOut().css('display', 'none');
    $('.subtitle').stop(true,true).fadeOut().css('display', 'none');
    $('.top').stop(true,true).fadeOut();
    $('.top2').stop(true,true).fadeOut();
    $('.btm').stop(true,true).fadeOut();
    $('.rhsgif').stop(true,true).fadeOut();
    $('.gifphoto').stop(true,true).fadeOut();
    $('#expcarousel').stop(true,true).fadeOut().css('display', 'none');
    $('#impcarousel').stop(true,true).fadeOut().css('display', 'none');
    $('#textcarousel').stop(true,true).fadeOut().css('display', 'none');
    $('#colcarousel').stop(true,true).fadeOut().css('display', 'none');
    $('#curcarousel').stop(true,true).fadeOut().css('display', 'none');
    $('.contact').stop(true,true).fadeIn(800);
    $('.jack').stop(true,true).fadeOut();
    $('.hi').stop(true,true).fadeIn(800);
    $('#carousel').stop(true,true).fadeOut();
    $('.heading').stop(true,true).fadeOut();
    $('.bgphoto').stop(true,true).fadeIn(800);
    $('#index').stop(true,true).fadeOut();
    $('#back').stop(true,true).fadeOut();
    $('.scrollFade').stop(true,true).fadeOut();
    $('.title').stop(true,true).fadeIn();
    $('.title .top').stop(true,true).fadeIn();
    $('.title .btm').stop(true,true).fadeIn();
    $('body').stop(true, true).css('height','97vh');
    $('body').stop(true, true).css('cursor','url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' transform=\'rotate(45)\' viewBox=\'0 0 30 30\'%3E%3Cg id=\'a\'/%3E%3Cg id=\'b\'%3E%3Cg id=\'c\'%3E%3Crect x=\'14\' width=\'2\' height=\'30\'/%3E%3Crect x=\'14\' width=\'2\' height=\'30\' transform=\'translate(30 0) rotate(90)\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 16 16, pointer');
    if ($(window).width() < 700) {
      $('#back').stop(true,true).fadeIn();
      $('#back1').stop(true,true).fadeIn();
      $('#carousel').stop(true, true).css('height','0');
      $('#mocarousel').stop(true, true).css('height','0');
    }
})


/* categories */
if ($(window).width() >= 700){

  var pos=0;
  $(window).bind('mousewheel DOMMouseScroll', function(event){
      if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {              
          pos=pos+200;         
      }
      else {
      if (pos > 1){
     
        pos=pos-200;      
      }
          
      }
      $('#carousel').scrollLeft( pos)
  });


  $('#carousel').scroll(function (event) {
    var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
    if(factor < 0.05) {
        var move = $(this.lastChild);
        move.stop(true,true).remove();
        $(this).stop(true,true).prepend(move);
        this.scrollLeft += move.width();
    } else if(factor > 0.95) {
        var move = $(this.firstChild);
        move.stop(true,true).remove();
        $(this).stop(true,true).append(move);
        this.scrollLeft -= move.width();
    }
});
$('#carousel').contents().filter(function() {
    return this.nodeType == 3; 
}).remove();


window.addEventListener('DOMContentLoaded', function() {
for (i = 1; i <= 5; i++) {
  var cat = document.getElementById("cat"+i),
      t = document.getElementById("top"+i);
      m = document.getElementById("mid"+i);
      b = document.getElementById("btm"+i);
      p = document.getElementById("photo"+i);
      (function(_cat, _t, _m, _b, _p) {
        $(document).on('mouseover', '#cat'+i, function() {
          $(_cat).css('opacity', '1.0');
          $(_cat).siblings().css( 'opacity', '0.3');
          $(_t).siblings().stop(true,true).css( 'display', 'none');
          $(_m).siblings().stop(true,true).css( 'display', 'none');
          $(_b).siblings().stop(true,true).css( 'display', 'none');
          $(_p).siblings().stop(true,true).css( 'display', 'none');
          $(_t).stop(true,true).fadeIn(300);
          $(_m).stop(true,true).fadeIn(300);
          $(_b).stop(true,true).fadeIn(300);
          $(_p).stop(true,true).fadeIn(500);
          $('.title').stop(true,true).fadeOut();
        });
        $(document).on('mouseleave', '#cat'+i, function() {
          $(_cat).css('opacity', '1.0');
          $(_cat).siblings().css( 'opacity', '1.0');
          $('.title').stop(true,true).fadeIn();
          $(_t).stop(true,true).fadeOut();
          $(_m).stop(true,true).fadeOut();
          $(_b).stop(true,true).fadeOut();
          $(_p).stop(true,true).fadeOut();
        });
      })(cat, t, m, b, p);
}

/* index */

for (i = 1; i <= 5; i++) {
  var cat = document.getElementById("cat"+i);
      t2 = document.getElementById("t"+i);
      m2 = document.getElementById("m"+i);
      b2 = document.getElementById("b"+i);
      p = document.getElementById("photo"+i);
      ind = document.getElementById("ind"+i);
      sub = document.getElementById("sub"+i);
      (function(_cat, _t2, _m2, _b2, _p, _ind, _sub) {
        $(document).on('click', '#cat'+i, function() {
        $(_cat).stop(true,true).css( 'display', 'none');
        $(_cat).stop(true,true).siblings().css( 'display', 'none');
        $('.title .top').stop(true,true).fadeOut();
        $('.title .btm').stop(true,true).fadeOut();
        $('.slide').stop(true, true).fadeOut();
        $(_t2).stop(true, true).fadeIn();
        $(_m2).stop(true, true).fadeIn();
        $(_b2).stop(true, true).fadeIn();
        $(_p).stop(true,true).fadeOut();
        $('.gifphoto').stop(true, true).fadeIn();
        $('.ceramics').stop(true, true).fadeIn();
        $('#index').stop(true,true).fadeIn().css('display', 'grid');
        $(_ind).stop(true,true).fadeIn().css('display','grid');
        $(_ind).stop(true,true).siblings().css( 'display', 'none');
        $(_sub).stop(true,true).fadeIn().css('display','block');
        $('body').stop(true, true).css('cursor','url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'32\' height=\'32\' transform=\'rotate(45)\' viewBox=\'0 0 30 30\'%3E%3Cg id=\'a\'/%3E%3Cg id=\'b\'%3E%3Cg id=\'c\'%3E%3Crect x=\'14\' width=\'2\' height=\'30\'/%3E%3Crect x=\'14\' width=\'2\' height=\'30\' transform=\'translate(30 0) rotate(90)\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E") 16 16, pointer');
        $('body').stop(true, true).css('height','97vh');
        $('#back').stop(true, true).css('display','none');
        $('#back1').stop(true, true).css('display','none');

        
  })
})(cat, t2, m2, b2, p, ind, sub);
}

$(document).click((event) => {
  if ((!$(event.target).closest('img').length) && (!$(event.target).closest('p').length)) {
    if ($('#index').css('display') === 'grid') {
      $('#cat1').stop(true,true).css('display','flex');
      $('#cat2').stop(true,true).css('display','flex');
      $('#cat3').stop(true,true).css('display','flex');
      $('#cat4').stop(true,true).css('display','flex');
      $('#cat5').stop(true,true).css('display','flex');
      $('.title .top').stop(true,true).fadeIn();
      $('.title .btm').stop(true,true).fadeIn();
      $('.slide').stop(true, true).fadeIn();
      $('.title2').stop(true, true).fadeOut();
      $('.gifphoto').stop(true, true).fadeOut();
      $('.ceramics').stop(true, true).fadeOut();
      document.getElementById('index').scrollTo(0,0);
      $('#index').stop(true,true).fadeOut();
      $('.subtitle').stop(true,true).fadeOut();
      $('body').stop(true, true).css('cursor','default');
      $('#back').stop(true, true).css('display','none');
      $('#back1').stop(true, true).css('display','none');
    } else if (($('#expcarousel').css('display') === 'flex') || ($('#impcarousel').css('display') === 'flex') || ($('#textcarousel').css('display') === 'flex') || ($('#colcarousel').css('display') === 'flex') || ($('#curcarousel').css('display') === 'flex')) {
      $('.no').stop(true,true).fadeOut();
      $('#expcarousel').stop(true,true).fadeOut().css('display', 'none');
      $('#impcarousel').stop(true,true).fadeOut().css('display', 'none');
      $('#textcarousel').stop(true,true).fadeOut().css('display', 'none');
      $('#colcarousel').stop(true,true).fadeOut().css('display', 'none');
      $('#curcarousel').stop(true,true).fadeOut().css('display', 'none');
      $('#index').stop(true,true).fadeIn().css('display', 'grid');

    } 
  }       
  if ($('.contact').css('display') != 'none') {
    $('body').click(function(){
      window.location.reload();
    });
  }  
});

});

} else if ($(window).width() < 700){


//categories(mobile)//

//fade in //
  var fadeElements = document.getElementsByClassName('scrollFade');

  function scrollFade() {
    var viewportBottom = window.scrollY + window.innerHeight;

    for (var i = 0; i < fadeElements.length; i++) {
      var element = fadeElements[i];
      var rect = element.getBoundingClientRect();
      var elementFourth = rect.height/1.2;
      var fadeInPoint = window.innerHeight - elementFourth;
      var fadeOutPoint = -(rect.height/0.5);

      if (rect.top <= fadeInPoint) {
        element.classList.add('scrollFade--visible');
        element.classList.add('scrollFade--animate');
        element.classList.remove('scrollFade--hidden');
        show(i+1);
        hide(i);
        hide(i-1);

      } else {
        element.classList.remove('scrollFade--visible');
        element.classList.add('scrollFade--hidden');
        hide(i+1);
      }

      if (rect.top <= fadeOutPoint) {
        element.classList.remove('scrollFade--visible');
        element.classList.add('scrollFade--hidden');
        hide(i+1);
      }


    }
  }
  document.addEventListener('scroll', scrollFade);
  window.addEventListener('resize', scrollFade);
  document.addEventListener('DOMContentLoaded', function() {
      scrollFade();
  });

  function show (i){
    var sub = document.getElementById("sub"+i);
    t = document.getElementById("top"+i);
    m = document.getElementById("mid"+i);
    b = document.getElementById("btm"+i);
    $(t).siblings().stop(true,true).css( 'display', 'none');
    $(m).siblings().stop(true,true).css( 'display', 'none');
    $(b).siblings().stop(true,true).css( 'display', 'none');
    $(sub).siblings().stop(true,true).css( 'display', 'none');
    
    $(t).stop(true,true).fadeIn(300);
    $(m).stop(true,true).fadeIn(300);
    $(b).stop(true,true).fadeIn(300);
    $(sub).stop(true,true).fadeIn(300);
  }

  function hide (i){
    var sub = document.getElementById("sub"+i);
    t = document.getElementById("top"+i);
    m = document.getElementById("mid"+i);
    b = document.getElementById("btm"+i);
    $(t).hide();
    $(m).hide();
    $(b).hide();
    $(sub).hide();
  }


  for (i = 1; i <= 5; i++) {
    var cat = document.getElementById("cat"+i);
        t2 = document.getElementById("t"+i);
        m2 = document.getElementById("m"+i);
        b2 = document.getElementById("b"+i);
        p = document.getElementById("photo"+i);
        ind = document.getElementById("ind"+i);
        tit = document.getElementById("tit"+i);
        (function(_cat, _t2, _m2, _b2, _p, _ind, _tit) {
          $(document).on('click', '#slide'+i, function() {
            $(_cat).css( 'display', 'none');
            $(_cat).siblings().css( 'display', 'none');
            $(_t2).fadeIn();
            $(_m2).fadeIn();
            $(_b2).fadeIn();
            $(_tit).css('display', 'block !important').fadeIn();
            $('.title').stop(true,true).fadeOut(300).css( 'display', 'none');
            $('.slide').stop(true,true).fadeOut(300);
            $('.catphoto').css( 'display', 'none');
            $('.gifphoto').fadeIn(800);
            $('#index').fadeIn(800).css('display', 'grid');
            $(_ind).fadeIn(800).css('display','grid');
    })
  })(cat, t2, m2, b2, p, ind, tit);
  }

}

/* Details */


function exp(){
  d = document.getElementById("expcarousel");
  ind = document.getElementById("index");
  d.style.display = "flex";
  ind.style.display = "none";

$(d).scroll(function (event) {
  $target  = $(d).first(),
  currentPosition = parseInt($target.css("transform").split(",")[400]),
  moveBy = function(scrolledBy){
      currentPosition += scrolledBy;
      $target.css("transform", "translateX(" + (currentPosition) + "px)")
  },
  lastScrollTop = 0 ;

currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
$(window).bind("scroll",function(e){
  var scrolledBy = $(window).scrollTop() - lastScrollTop;
  moveBy(-scrolledBy);
  lastScrollTop = $(window).scrollTop();
});

  var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
  if(factor < 0.4) {
      var move = $(this.lastChild);
      move.stop(true,true).remove();
      $(this).stop(true,true).prepend(move);
      this.scrollLeft += move.width();
  } else if(factor > 0.8) {
      var move = $(this.firstChild);
      move.stop(true,true).remove();
      $(this).stop(true,true).append(move);
      this.scrollLeft -= move.width();
  }
});
$(d).contents().filter(function() {
  return this.nodeType == 3;
}).remove();

} 


function expno(num){
no = Number(num) +1;
document.getElementById("expno").innerHTML = "no." + no;
document.getElementById("expmo").innerHTML = "no." + no;
$(".no").css('display','inline-block');
}

function imp(){
  
      d = document.getElementById("impcarousel");
      ind = document.getElementById("index");
    d.style.display = "flex";
    ind.style.display = "none";

    $(d).scroll(function (event) {
      $target  = $(d).first(),
      currentPosition = parseInt($target.css("transform").split(",")[400]),
      moveBy = function(scrolledBy){
          currentPosition += scrolledBy;
          $target.css("transform", "translateX(" + (currentPosition) + "px)")
      },
      lastScrollTop = 0 ;

  currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
  $(window).bind("scroll",function(e){
      var scrolledBy = $(window).scrollTop() - lastScrollTop;
      moveBy(-scrolledBy);
      lastScrollTop = $(window).scrollTop();
  });

      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      if(factor < 0.2) {
          var move = $(this.lastChild);
          move.remove();
          $(this).prepend(move);
          this.scrollLeft += move.width();
      } else if(factor > 0.8) {
          var move = $(this.firstChild);
          move.remove();
          $(this).append(move);
          this.scrollLeft -= move.width();
      }
    });
    $(d).contents().filter(function() {
      return this.nodeType == 3;
    }).remove();

  } 
  
function impno(num){
  no = Number(num) +1;
  document.getElementById("impno").innerHTML = "no." + no;
  document.getElementById("impmo").innerHTML = "no." + no;
  $(".no").css('display','inline-block');
}


function text(){
  
      d = document.getElementById("textcarousel");
      ind = document.getElementById("index");
    d.style.display = "flex";
    ind.style.display = "none";

    $(d).scroll(function (event) {
      $target  = $(d).first(),
      currentPosition = parseInt($target.css("transform").split(",")[400]),
      moveBy = function(scrolledBy){
          currentPosition += scrolledBy;
          $target.css("transform", "translateX(" + (currentPosition) + "px)")
      },
      lastScrollTop = 0 ;

  currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
  $(window).bind("scroll",function(e){
      var scrolledBy = $(window).scrollTop() - lastScrollTop;
      moveBy(-scrolledBy);
      lastScrollTop = $(window).scrollTop();
  });

      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      if(factor < 0.2) {
          var move = $(this.lastChild);
          move.remove();
          $(this).prepend(move);
          this.scrollLeft += move.width();
      } else if(factor > 0.8) {
          var move = $(this.firstChild);
          move.remove();
          $(this).append(move);
          this.scrollLeft -= move.width();
      }
    });
    $(d).contents().filter(function() {
      return this.nodeType == 3;
    }).remove();

  } 
  
function textno(num){
  no = Number(num) +1;
  document.getElementById("textno").innerHTML = "no." + no;
  document.getElementById("textmo").innerHTML = "no." + no;
  $(".no").css('display','inline-block');
}


function col(){
  
      d = document.getElementById("colcarousel");
      ind = document.getElementById("index");
    d.style.display = "flex";
    ind.style.display = "none";

    $(d).scroll(function (event) {
      $target  = $(d).first(),
      currentPosition = parseInt($target.css("transform").split(",")[400]),
      moveBy = function(scrolledBy){
          currentPosition += scrolledBy;
          $target.css("transform", "translateX(" + (currentPosition) + "px)")
      },
      lastScrollTop = 0 ;

  currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
  $(window).bind("scroll",function(e){
      var scrolledBy = $(window).scrollTop() - lastScrollTop;
      moveBy(-scrolledBy);
      lastScrollTop = $(window).scrollTop();
  });

      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      if(factor < 0.2) {
          var move = $(this.lastChild);
          move.remove();
          $(this).prepend(move);
          this.scrollLeft += move.width();
      } else if(factor > 0.8) {
          var move = $(this.firstChild);
          move.remove();
          $(this).append(move);
          this.scrollLeft -= move.width();
      }
    });
    $(d).contents().filter(function() {
      return this.nodeType == 3;
    }).remove();

  }
  
function colno(num){
  no = Number(num) +1;
  document.getElementById("colno").innerHTML = "no." + no;
  document.getElementById("colmo").innerHTML = "no." + no;
  $(".no").css('display','inline-block');
}


function cur(){
      d = document.getElementById("curcarousel");
      ind = document.getElementById("index");
    d.style.display = "flex";
    ind.style.display = "none";

    $(d).scroll(function (event) {
      $target  = $(d).first(),
      currentPosition = parseInt($target.css("transform").split(",")[400]),
      moveBy = function(scrolledBy){
          currentPosition += scrolledBy;
          $target.css("transform", "translateX(" + (currentPosition) + "px)")
      },
      lastScrollTop = 0 ;

  currentPosition = isNaN(currentPosition) ? 0 : currentPosition;
  $(window).bind("scroll",function(e){
      var scrolledBy = $(window).scrollTop() - lastScrollTop;
      moveBy(-scrolledBy);
      lastScrollTop = $(window).scrollTop();
  });
  
      var factor = this.scrollLeft / (this.scrollWidth - $(this).width());
      if(factor < 0.2) {
          var move = $(this.lastChild);
          move.remove();
          $(this).prepend(move);
          this.scrollLeft += move.width();
      } else if(factor > 0.8) {
          var move = $(this.firstChild);
          move.remove();
          $(this).append(move);
          this.scrollLeft -= move.width();
      }
    });
    $(d).contents().filter(function() {
      return this.nodeType == 3;
    }).remove();

}
  
function curno(num){
  no = Number(num) +1;
  document.getElementById("curno").innerHTML = "no." + no;
  document.getElementById("curmo").innerHTML = "no." + no;
  $(".no").css('display','inline-block');
}