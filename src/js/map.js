(function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat:59.934321,  lng: 30.330915},
    zoom: 12
	    

  });
  
  var myLatLng = {lat:59.934321,  lng: 30.330915};

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'My home!'
  });
  


})();

