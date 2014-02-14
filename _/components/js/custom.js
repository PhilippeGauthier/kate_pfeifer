/*----- Smooth-scroll----*/

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
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

/*----- Maps----*/

var map;
var kate = new google.maps.LatLng(37.289694, -121.987962);

var MY_MAPTYPE_ID = 'custom_style';

function initialize() {

  var featureOpts = [
    {
      stylers: [
        { hue: '#0x00ff00' },
        { visibility: 'simplified' },
        { lightness: '13'},
        { saturation: '-55'},
      ]
    },
    {
      elementType: 'labels',
      stylers: [
        { visibility: 'on' },

        // { color: '#ffffff'},
      ]
    },

  ];

  var mapOptions = {
    zoom: 9,
    center: kate,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
    },
    mapTypeId: MY_MAPTYPE_ID
  };

  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

  var styledMapOptions = {
    name: 'Custom Style'
  };

  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);

  var marker = new google.maps.Marker({
  position: map.getCenter(),
  map: map,
  title: 'Click to zoom'
});

google.maps.event.addListener(map, 'center_changed', function() {
  // 3 seconds after the center of the map has changed, pan back to the
  // marker.
  window.setTimeout(function() {
    map.panTo(marker.getPosition());
  }, 3000);
});

google.maps.event.addListener(marker, 'click', function() {
  map.setZoom(17);
  map.setCenter(marker.getPosition());
});
}

google.maps.event.addDomListener(window, 'load', initialize);


/*----- Hover-effect----*/

$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });
});


