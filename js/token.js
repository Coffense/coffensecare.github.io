/*instafeed*/
var feed = new Instafeed({
  target: "globalCar",
  accessToken: 'IGQVJWVDBJZAHhuWXd5bTd5ZAm9VQjVrdFNkTWEycmJmNWwyeTRsYmRwdkF1Qkh5UGI1d2xIZA2Y0RVB5d0RsS3pRNlBWaFJfS2NCSE5TVnRyME8wWXNWMTVxSFFoSFhoM0pFTmpmSzlSTXotQmVKU2U0YgZDZD',
  template: '<div class="items"><img title="{{caption}}" src="{{image}}" /><div class="overlay">{{caption}}</div><a href="{{image}}" data-fancybox="images" data-caption="{{caption}}" class="view-image"></a><a href="{{link}}" class="view-post" target="_blank"></a></div>', 
   after: function() {
      $(".overlay").text(function(index, currentText) {
          return currentText.substr(0, 180);
      });

      $(".carousel.global").owlCarousel({	
          loop: false,	
          margin: 0,
          center: false,
          autoplay: false,
          nav: true,
          navText: [" "," "],
          dots: false,
          responsiveClass: true,
          responsive:{
              0:{items:1},
              1000:{items:4},
          }
      });
   },
});
feed.run();

var feed2 = new Instafeed({
	target: "globalGrid",
  accessToken: 'IGQVJWVDBJZAHhuWXd5bTd5ZAm9VQjVrdFNkTWEycmJmNWwyeTRsYmRwdkF1Qkh5UGI1d2xIZA2Y0RVB5d0RsS3pRNlBWaFJfS2NCSE5TVnRyME8wWXNWMTVxSFFoSFhoM0pFTmpmSzlSTXotQmVKU2U0YgZDZD',
  template: '<div class="items"><img title="{{caption}}" src="{{image}}" /><div class="overlay">{{caption}}</div><a href="{{image}}" data-fancybox="images" data-caption="{{caption}}" class="view-image"></a><a href="{{link}}" class="view-post" target="_blank"></a></div>', 
   after: function() {
      $(".overlay").text(function(index, currentText) {
          return currentText.substr(0, 180);
      });
   },
});
feed2.run();