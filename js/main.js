/*jshint unused:false*/

//buynow global
$(function() {
	"use strict";
	$('#storeselector').change(function(){
		$('.store').hide();
		$('#' + $(this).val()).show();
	});
});

//sort
$(function() {
  // choose target dropdown
  var select = $('select');
  select.html(select.find('option').sort(function(x, y) {
    return $(x).text() > $(y).text() ? 1 : -1;
  }));
});

//dropdown menu
$(document).ready(function (){
    $('.menu > li,.product-menu > li').each(function () {
        var t = null;
        var li = $(this);
        li.hover(function(){
            t = setTimeout(function(){
                li.find("ul").slideDown(300);
                t = null;
            }, 300);
        }, function(){
            if (t){
                clearTimeout(t);
                t = null;
            }
            else
                li.find("ul").slideUp(200);
        });
    });
});

//show hide product
$(".product-show li").each(function(){
     $(this).hide();
    if($(this).attr('id') == 'opsi1') {
        $(this).show();
    }
});


$('.product-list li a').on( "click", function(e) {
    var id = $(this).attr('data-related'); 
    $(".product-show li").each(function(){
        $(this).hide();
        if($(this).attr('id') == id) {
            $(this).fadeIn(1000);
        }
    });
});

/*banner*/
jQuery("#layerslider").layerSlider({
	type: 'fullwidth',
	allowFullscreen: false,
	pauseOnHover: 'disabled',
	navPrevNext: false,
	navButtons: false,
	maxRatio: 1,
	autoStart: true,
	globalBGSize: 'cover',
	navStartStop: false,
	showCircleTimer: false,
	thumbnailNavigation: 'disabled',
	skin: 'v5',
	skinsPath: 'js/layerslider/skins/'
});

//fixed limit
function checkOffset() {	
	"use strict";
    if ($('.career-form-sidebar').offset().top + $('.career-form-sidebar').height() >= $('.career-form-sidebar').offset().top - 10) $('.career-form-sidebar').removeClass('fixed').addClass('absolute');
    if ($(document).scrollTop() + window.innerHeight < $('.footer').offset().top) $('.career-form-sidebar').removeClass('absolute').addClass('fixed'); // restore when you scroll up
}
$(document).scroll(function() {
	"use strict";
    checkOffset();
});

//tooltip flag
setTimeout(function() {
	"use strict";
	$('.tooltip-flag').slideToggle('slow');
}, 10000); // <-- time in milliseconds

//background
function changeBg() {
	"use strict";
	var bgArray = ['/img/bg/bg-blue.jpg','/img/bg/bg-red.jpg','/img/bg/bg-green.jpg','/img/bg/bg-yellow.jpg'],
	selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];
	$('body').css('background', 'url(' + selectBG + ')');
}

//select jump
$(function(){
	"use strict";
    $('#select-region').on('change', function() {  
      var url = this.value;  
      window.open(url, '_blank');
    });
	$('#select-category').on('change', function () {
	  var url = this.value;  
	  window.location = url;
    });
	$('#showdiv1').click(function() {
		$('div[class^=div]').hide();
		$('.div1').show();
	});
	$('#showdiv2').click(function() {
		$('div[class^=div]').hide();
		$('.div2').show();
	});
	$('#showdiv3').click(function() {
		$('div[class^=div]').hide();
		$('.div3').show();
	});	
	$('#showdiv4').click(function() {
		$('div[class^=div]').hide();
		$('.div4').show();
	});	
	$('#showdiv5').click(function() {
		$('div[class^=div]').hide();
		$('.div5').show();
	});	
	$('#showdiv6').click(function() {
		$('div[class^=div]').hide();
		$('.div6').show();
	});	
});

//mobile menu
$(function() {"use strict"; $( '#dl-menu' ).dlmenu();});


$(document).ready(function() {
	"use strict";
	
	//limit char
	//var hhpdesc = $('.hhp-desc');
	//hhpdesc.text(hhpdesc.text().substring(0,260));
	
	//select lang
	var el;
	$('.lang').click(function(e) {
		el = $(this).nextAll('.langlist:lt(1)');
		el.slideToggle(100);
		$('.langlist').not(el).hide();//hide all execpt the current one
		e.stopPropagation();
	});
	$(window).click(function(e) {
		var container = $(".langlist");
		if (container.is(':visible') && !$(e.target).closest('.langlist').length) {
			container.hide();
		}
	});
	$('#lang-id').click(function() {
		$(".lang .flag-sm").removeClass('united-kingdom');
		$(".lang .flag-sm").addClass('indonesia');
		$('.langlist').hide();
	});
	$('#lang-en').click(function() {
		$(".lang .flag-sm").removeClass('indonesia');
		$(".lang .flag-sm").addClass('united-kingdom');
		$('.langlist').hide();
	});
	
	//dom
	$('[data-fancybox]').fancybox();
});

//carousel
$(document).ready(function() {
	"use strict";	
	$('.event-banner').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		autoPlay: 1000,
		items: 1,
		autoHeight:true,
		autoplayHoverPause:true,
		navText: ["<img src='/img/icon/icon-prev.png' alt='prev'>","<img src='/img/icon/icon-next.png' alt='next'>"]
	});	
	
	$('.product-slider').owlCarousel({
		loop:true,
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed:1200,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:2,
				nav:true
			},
			1000:{
				items:3
			}
		},
		autoHeight:true,
		navText: ["<img src='/img/icon/icon-prev.png' alt='prev'>","<img src='/img/icon/icon-next.png' alt='next'>"]
	});
	
	$('.produk-list').owlCarousel({
		center: true,
		items: 3,
		loop: true,
		margin: 0,
		responsiveClass:true,
		navText: [ ' ', ' ' ],
		URLhashListener: true,
  		startPosition: 'URLHash',
		responsive: {
			0 :{
				items:1
			},
			1000 :{
				items:3
			}
		}
	});

	$('.video-slider').owlCarousel({
		loop:false,
		nav:true,
		margin: 20,
		autoplay:true,
		autoplayTimeout:4000,
		autoplaySpeed:1200,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		},
		autoHeight:true,
		navText: ["<img src='/img/icon/icon-prev.png' alt='prev'>","<img src='/img/icon/icon-next.png' alt='next'>"]
	});
	
	$('.home-product-slick').slick({
		dots: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 3000,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});
	
	$('.home-video-slick').slick({
		dots: false,
		infinite: false,
		speed: 300,
		responsive: [
			{
				breakpoint: 3000,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 2
				}
			},
			{
				breakpoint: 700,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1
				}
			}
		]
	});
});

document.addEventListener("DOMContentLoaded", function() {
  "use strict";
  var bigimage = $("#hhp");
  var thumbs = $("#hhp-page");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 1,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
	autoplayHoverPause:true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: ["<img src='/img/icon/icon-prev.png' alt='prev'>","<img src='/img/icon/icon-next.png' alt='next'>"]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 6,
    dots: false,
    nav: false,
    navText: ['',''],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});

document.addEventListener("DOMContentLoaded", function() {
  "use strict";

  var $owl1 = $("#sync1");
  var $owl2 = $("#sync2");
  var flag = false;
  var duration = 300;  
  $owl1
    .owlCarousel({
      items: 1,
      lazyLoad: false,
      loop: false,
      margin: 10,
      dots: false,
	  nav: false,
	  navText: ['',''],
      responsiveClass: true,
	  responsive:{
			0:{
				autoHeight:true
			},
			500:{
				autoHeight:true
			},
		  	700:{
				autoHeight:true	
			}
		}
    })
    .on("changed.owl.carousel", function(e) {
      if (!flag) {
        flag = true;
        console.log(e.item.index);
        $owl2
          .find(".owl-item")
          .removeClass("current")
          .eq(e.item.index)
          .addClass("current");
        if (
          $owl2
            .find(".owl-item")
            .eq(e.item.index)
            .hasClass("active")
        ) {
        } else {
          $owl2.trigger("to.owl.carousel", [e.item.index, duration, true]);
        }
        flag = false;
      }
    });

  $owl2
    .on("initialized.owl.carousel", function() {
      $owl2
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({      
      lazyLoad: false,
      loop: false,
      margin: 50,
      nav: false,
	  dots: false,
	  startPosition: 1,
	  autoWidth:true,
	  navText: ["<img src='/img/icon/icon-prev.png' alt='prev'>","<img src='/img/icon/icon-next.png' alt='next'>"],
      responsiveClass: true,
	  responsive:{
			0:{
				items:1
			},
			500:{
				items:1
			},
		  	700:{
				items:2
			},
			1000:{
				items:4,
				margin: 70,
			},
		    1200:{
				items:4
			}
		}
    })
    .on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      $owl1.trigger("to.owl.carousel", [number, duration, true]);
    });	
});

//isotope
$(document).ready(function() {
"use strict";
	// filter functions
var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    var number = $(this).find('.number').text();
    return parseInt( number, 10 ) > 50;
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};

function getHashFilter() {
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

// init Isotope
var $container = $('.isotope');

// bind filter button click
var $filterButtonGroup = $('.button-group');
$filterButtonGroup.on( 'click', 'button', function() {
  var filterAttr = $( this ).attr('data-filter');
  // set filter in hash
  location.hash = 'filter=' + encodeURIComponent( filterAttr );
});

var isIsotopeInit = false;

function onHashchange() {
  var hashFilter = getHashFilter();
  if ( !hashFilter && isIsotopeInit ) {
    return;
  }
  isIsotopeInit = true;
  // filter isotope
  $container.isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows',
    // use filterFns
    filter: filterFns[ hashFilter ] || hashFilter
  });
  // set selected class on button
  if ( hashFilter ) {
    $filterButtonGroup.find('.is-checked').removeClass('is-checked');
    $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('is-checked');
  }
}

$(window).on( 'hashchange', onHashchange );

// trigger event handler to init Isotope
onHashchange();
  //****************************
  // Isotope Load more button
  //****************************
  var initShow = 6; //number of items loaded on init & onclick load more button
  var counter = initShow; //counter for load more button
  var iso = $container.data('isotope'); // get Isotope instance

  loadMore(initShow); //execute function onload

  function loadMore(toShow) {
    $container.find(".hidden").removeClass("hidden");

    var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
      return item.element;
    });
    $(hiddenElems).addClass('hidden');
    $container.isotope('layout');

    //when no more to load, hide show more button
    if (hiddenElems.length === 0) {
      jQuery("#load-more").hide();
    } else {
      jQuery("#load-more").show();
    }

  }

  //append load more button
  $container.after('<button class="btn-solid-red" id="load-more"> Load More</button>');

  //when load more button clicked
  $("#load-more").click(function() {
    if ($('#filters').data('clicked')) {
      //when filter button clicked, set initial value for counter
      counter = initShow;
      $('#filters').data('clicked', false);
    } else {
      counter = counter;
    }

    counter = counter + initShow;

    loadMore(counter);
  });

  //when filter button clicked
  $("#filters").click(function() {
    $(this).data('clicked', true);

    loadMore(initShow);
  });  
});

//datepicker
$('.datebirth').datepicker({
	monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],	
	dateFormat: "M dd, yy",
	changeMonth: true,
	changeYear: true,
	yearRange: '1950:2000',
});
