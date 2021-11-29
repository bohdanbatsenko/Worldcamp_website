

$('.loader_inner').fadeOut();
	$('.loader').delay(1000).fadeOut('slow');	


$(document).ready(function() {
    // inject_markup();
// $('.menu li a').click(function(){
//     $('li a').removeClass("active");
//     $(this).addClass("active");
// });


!function () {
   var href = location.href;
   var pgurl = href.substr(href.lastIndexOf('/') + 1);
   // match all the anchors on the page with the html file name
   $('a[href="' + pgurl + '"]').addClass('active');
}();

   // function setActive() {
   //    aObj = document.getElementById('menu').getElementsByTagName('a');
   //    for(i=0;i<aObj.length;i++) {
   //      if(document.location.href.indexOf(aObj[i].href)>=0) {
   //        var activeurl = window.location;
   //        $('a[href="'+activeurl+'"]').parent('li').addClass('active');
   //      }
   //    }
   //  }
   //  window.onload = setActive;


$(function() {
  $('.hamburger').click(function () {
    showHideMobile();
  });
  
  $(".dimmer").click(function() {
    showHideMobile();
  });
  
  $('li .icon-arrow').click(function () {
    $(this).parent().parent().toggleClass('showSubmenu');
  });
});

function showHideMobile() {
  $(".hamburger").toggleClass('active');
  $(".hamburger").parent('.menu').toggleClass('active');
  $('.dimmer').toggleClass('active');
  $('body').toggleClass('no-scrolling');
}



    // Headheive Options
    var options = {
      offset: 600
    }

    // Create a new instance of Headhesive.js and pass in some options
    var header = new Headhesive('.header', options);





//jQuery(".sf-menu").superfish({
//	cssArrows: false,
//	hoverClass: 'no-class',
//	animation:   {opacity:'show',height:'show'},
//	delay: 200
//});




		function switchImages( newImagePath) {
			var logo = $('.logo-index');
			logo.fadeOut(100, function() {
				logo.attr("src", newImagePath );
				logo.fadeIn(90);
			});
		}
//
//		var defaultLogo = "img/logoUYF_full.svg";
//				smallLogo = "img/logoUYF.svg";
//
//	$(window).scroll(function() {
//
//	if($(window).scrollTop() >= 500) {
//		$('.top-panel').css('padding', '0');
//		//$('.top-panel').css('background', 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.4))');
//
//		$('.top-panel').css({
//			'position' : 'fixed',
//			'background': 'rgba(255,250,255,0.8)',
//			'border-bottom': '#EE2A9C 1px solid',
//			'transition': 'all .3s ease-in-out'
//		});
//		$('img.logo-index').css('width', '75px');
//		switchImages (smallLogo);		
//		return true;
//	}
//	else {
//		$('.top-panel').css({
//			//'padding' : '0 0 0 0',
//			'background': 'none',
//			'position' : 'relative'
//		});	
//		$('img.logo-index').css('width', '350px');
//		switchImages (defaultLogo);
//
//		return true;
//	}
//});

//expanding panels s-registration
// function inject_markup() {
//     $('.expanding_panel').each(function() {
//         var link_text = $(this).attr('data-link-text');
//         var content = $(this).html();

//         $(this).html('<div class="expanding_panel_content_container" style="height:0px;"><div class="expanding_panel_content">'+content+'</div></div>');

//         $(this).append('<div class="expanding_panel_trigger">'+link_text+'</div>');
//     });

//     activate_panels();
// }

// function activate_panels() {
//     $('.expanding_panel .expanding_panel_trigger').on('click', function() {
//         var new_height = null;
//         var selected_panel = $(this).closest('.expanding_panel');
//         var selected_content = selected_panel.find('.expanding_panel_content_container');

//         selected_panel.toggleClass('open');
//         if( selected_panel.hasClass('open') ){
//             new_height = selected_panel.find('.expanding_panel_content').outerHeight(true);
//         }
//         else{
//            new_height = 0; 
//         }

//         selected_content.animate({'height':new_height+'px'},1000,function(){
//             if( new_height != 0) {
//                 $(this).removeAttr('style');
//             }
//         });

//     });
// }







// function heightDetect() {
// 	$( ".main-head").css("height", $(window).height());
// 		};
// 		heightDetect();
// 	$(window).resize(function() {
// 				heightDetect();
// 		});

	$(".top").click(function() {
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});

	$(".button-down").click(function() {
		$("html, body").animate({ scrollTop: $(".main-head").height()+40 }, "slow");
		return false;
	});

// countdown
$('.gnc-countdown').countdown({ 
    until: new Date(2020, 3, 24, 09, 0 ),
    labels: ['Років', 'Місяців', 'Тижнів', 'Днів', 'Годин', 'Хвилин', 'Секунд']
});


$(document).scroll(function() {
  var scrollDonate = $(this).scrollTop();
  if (scrollDonate > 150) {
    $('.donate-wrap').addClass('fix-donate');
  } else {
    $('.donate-wrap').removeClass('fix-donate');
  }
});

$('.donate_link').magnificPopup({
    type: "inline",
    midClick: true,
    showCloseBtn: true
});



$('.pdf_link').magnificPopup({
    type: "iframe",
    midClick: true,
    showCloseBtn: true
});



// slider on index page
$(".slider-2").owlCarousel({
  loop: true,
  animateOut: 'fadeOut',
  items: 1,
  nav: true,
  navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        520:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        560:{
            items:1,
            dots: false,
            autoHeight: true,
        },
        768:{
            items:1,
            dots: false,
        },
        992:{
            items:1,
            dots: true,
        },
        1200:{
          dots: true,
          items:1,
        }
    }

});


// carousel partners
	$(".carousel-brands").owlCarousel({
    responsiveClass: true,
		loop:true,
		margin: 30,
		nav: true,
		navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
		responsive:{
				0:{
						items:1,
            dots: true,
            autoHeight: true,
				},
				520:{
						items:1,
            dots: true,
            autoHeight: true,
				},
				560:{
						items:2,
            dots: true,
            autoHeight: true,
				},
				768:{
						items:5,
            dots: false,
				},
				992:{
						items:6,
            dots: false,
				},
				1200:{
          dots: false,
					items:10,
				}
		}
	});


    // $('.options a').click(function(){
    //     var currentClass = this.id;
    //     if ($('#ephemeral article.' +currentClass).hasClass('reveal')){
    //         $('.options a.active').removeClass('active');
    //         $('#ephemeral article.reveal').removeClass('reveal').hide('slow');
    //         $('.close-ephemeral').fadeOut('slow');
    //     }
    //     else {
    //         $('.options a.active').removeClass('active');
    //         $(this).addClass('active');
    //         $('#ephemeral article.reveal').removeClass('reveal').hide('slow');
    //         $('#ephemeral article.' +currentClass).addClass('reveal').show('slow');
    //         $('.close-ephemeral').fadeIn('slow');
    //     }
    //     return false;
    // });

    // $('.close-ephemeral a').click(function(){
    //     $('#ephemeral article').hide('slow'); 
    //     $('.close-ephemeral').fadeOut('slow');
    //     $('.options a.active').removeClass('active');
    // });


// Equal heights
	// function heightses() {
	// 	$(".carousel-team .carousel-item").height('auto').equalHeights();
	// }




var owl = $('.options');
	owl.owlCarousel({
		//autoplay: autoplay,
		loop: false,
		items: 4,
		//itemClass: "item",
		margin: 0,
		callbacks: true,
	  responsiveClass:true,
    responsive:{
        0:{
            items:1,
            loop:false,
            //dots: true,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        },
        600:{
            items:3,
            loop:false,
            margin: 10,
            //dots: true,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        },
        992:{
            items:3,
            //dots: true,
            nav:true,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            loop:false,
        },        
        1000:{
            items:4,
            //nav:true,

            loop:false,
        }
    }
		//nav: true,
		
		//navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
	});	
	$(".next").click(function(){
		owl.trigger('next.owl.carousel');
	});
	$(".prev").click(function(){
		owl.trigger('prev.owl.carousel');
	});


// carousel english camp
    $('.carousel-eng-camp').owlCarousel({
        responsiveClass: true,
        autoplay: 1600,
        singleItem: true,
        smartSpeed: 900,
        navSpeed: 1500,
        autoHeightClass: true,
        items: 1,
        loop: true,
        //autoHeightClass: true,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        stopOnHover: true,
        pagination: true,
        // beforeMove: function(){
        //     $('.slide-title').removeClass('animated fadeInDown');

        //   },
        // afterMove: function(){
        //     $('.slide-title').addClass('animated fadeInDown');
        //   }        
     });

// carousel leaders camp
    $('.carousel-leaders').owlCarousel({
        responsiveClass: true,
        autoplay: 2000,
        singleItem: true,
        navSpeed: 1500,
        items: 1,
        loop: true,
        //autoHeightClass: true,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        stopOnHover: true,
        pagination: true,
        // beforeMove: function(){
        //     $('.slide-title').removeClass('animated fadeInDown');

        //   },
        // afterMove: function(){
        //     $('.slide-title').addClass('animated fadeInDown');
        //   }        
     });

// carousel koreancamp
    $('.carousel-korcamp').owlCarousel({
        responsiveClass: true,
        autoplay: 2000,
        singleItem: true,
        navSpeed: 1500,
        items: 1,
        loop: true,
        autoHeightClass: true,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        stopOnHover: true,
        pagination: true,
     
     });





  $(".section_6").waypoint(function() {

    $(".section_6 .team").each(function(index) {
      var ths = $(this);
      setInterval(function() {
        ths.removeClass("team-off").addClass("team-on");
      }, 200*index);
    });

  }, {
    offset : "35%"
  });


// tabs on about.php
	$(".tabs_meetings .wrapper .tab").click(function() {
		$(".tabs_meetings .wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tabs_meetings .wrapper .tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



// .s-gnc-works 
	// $("#portfolio_grid").mixItUp();

	// $(".s_portfolio li").click(function() {
	// 	$(".s_portfolio li").removeClass("active");
	// 	$(this).addClass("active");
	// });
	// 	jQuery('.popup_content').magnificPopup({
	// 		type: "inline",
	// 		midClick: true
	// 	});

//$(".s-gnc-works li").click(function() {
//	$(".s-gnc-works li").removeClass("active");
//	$(this).addClass("active");
//});

// s-isotope on index
var $gallery = $('.isotope-gallery').isotope({
  // options
	itemSelector: '.isotope-item',
	percentPosition: true,
 	layoutMode: 'masonry',
  fitwidth: true,
  // masonry: {
  //  columnWidth: 100,
  //  gutter: 10
  // }
});

$gallery.imagesLoaded().progress( function() {
  $gallery.isotope('layout');
});

$('.gallery2019').isotope({
	itemSelector: '.item',
	percentPosition: true,
	layoutMode: 'masonry'
})

var $mindikdgallery = $('.mindkidsgallery-container').isotope({
  itemSelector: '.photo-mindkids',
  layoutMode: 'masonry',
});

$mindikdgallery.imagesLoaded().progress( function() {
  $mindikdgallery.isotope('layout');
});


$('.slider-venue').owlCarousel({
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 4200,  
  items: 1,
  //autoplay: 50,
  smartSpeed: 900,
  navSpeed: 1500,
  loop: true,
  autoHeightClass: true,
  dots: true,
  pagination: true,
});

$('.photo-mindkids').magnificPopup({
  type : 'image',
  gallery : {
    enabled: true
  },
  removalDelay : 300,
  mainClass : 'mfp-fade'
});

$('.isotope-carousel.engcamp').owlCarousel({
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2200,  
  items: 1,
  //autoplay: 50,
  smartSpeed: 900,
  navSpeed: 1500,
  loop: true,
  autoHeightClass: true,
  dots: true,
  pagination: true,
 });

$('.isotope-carousel.leaders').owlCarousel({
  responsiveClass: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 2500,   
  //autoplay: 200,
  smartSpeed: 600,
  navSpeed: 1500,
  loop: true,
  autoHeightClass: true,
  dots: true,
  pagination: true,
 });


$('.isotope-carousel.korcamp').owlCarousel({
  responsiveClass: true,
  autoplay: true,
  autoplayTimeout: 2000,   
  items: 1,
  //autoplay: 500,
  smartSpeed: 900,
  navSpeed: 1500,
  loop: true,
  autoHeightClass: true,
  dots: true,
  pagination: true,
 });


    $('.index-carousel ').owlCarousel({
        responsiveClass: true,
        animateOut: 'fadeOut',
        autoplay: 1600,
        singleItem: true,
        smartSpeed: 900,
        navSpeed: 1500,
        autoHeightClass: true,
        items: 1,animateOut: 'fadeOut',
        loop: true,
        //autoHeightClass: true,
        dots: true,
        nav:true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
        stopOnHover: true,
        pagination: true,
        // beforeMove: function(){
        //     $('.slide-title').removeClass('animated fadeInDown');

        //   },
        // afterMove: function(){
        //     $('.slide-title').addClass('animated fadeInDown');
        //   }        
     });


//Magnific Popup
	$(".portfolio-item").each(function(e) {

		var th = $(this);

		th.attr("href", "#portfolio-img-" + e)
			.find(".portfolio-popup")
				.attr("id", "portfolio-img-" + e);

	});

	$(".portfolio-item").magnificPopup({
		mainClass: 'my-mfp-zoom-in',
		removalDelay: 300,
		type: 'inline',
	});


  $(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height()) {
      $('.top').addClass('active');
    } else {
      $('.top').removeClass('active');      
    }
  });

  //Аякс отправка форм
  //Документация: http://api.jquery.com/jquery.ajax/
  // $(".forms").submit(function() {
  //   $.ajax({
  //     type: "POST",
  //     url: "mail.php",
  //     data: $(this).serialize()
  //   }).done(function() {
  //     alert("Спасибо за заявку!");
  //     setTimeout(function() {
  //       $.magnificPopup.close();
  //       $(".forms").trigger("reset");
  //     }, 1000);
  //   });
  //   return false;
  // });



});
