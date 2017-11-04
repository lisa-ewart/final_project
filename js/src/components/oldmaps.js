// API KEY:    AIzaSyATYry8EYxN0doyvmyEDPcfKnz2X6s7hjE




      let map, infoWindow;
      function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 16,
          scrollwheel:  false

          // zoomControl: false,
          // scaleControl: false,
          // scrollwheel: false,
          // disableDoubleClickZoom: true,

          
        });
        infoWindow = new google.maps.InfoWindow;

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            const pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            

            const userinfo = firebase.auth().currentUser;
            infoWindow.setPosition(pos);
            



             var contentString = '<div id="content">'+
            '<div id="siteNotice">'+
            '</div>'+
            '<h1 id="firstHeading" class="firstHeading">LisaNicole</h1>'+
            '<h2 class="firstHeading">License #: N/A</h2>'+
            '<div id="bodyContent">'+
            '<p><b>LisaNicole </b>is a web app developer  '+
            '<button class = "instMessageBtn">Instant message LisaNicole</button>'+
            '<p>LisaNicole ratings: </p>'+
            '-She was allright...Eh...'+
             '<p>-Could be worse.  Could be raining.</p>'+
              '<p>-We should be grateful that the bio is not longer. Bravo to site editors.</p>'+
      
              '<p></p>'+
            
            '</div>'+
            '</div>';








             var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 200
              });
  //          infoWindow.setContent(`<button class = "fizal">${userinfo   .email}</button>`);
            //infoWindow.setContent(`<button class = "fizal">${userinfo.email}</button>`);
            //infoWindow.open(map);
            map.setCenter(pos);
            var marker = new google.maps.Marker({
              position: pos,
              map: map,
              title: 'LISA'
            });


             




            marker.addListener('click', function() {
              //console.log("clicked map");
             infowindow.open(map, marker);
            });
            
            
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
        infoWindow.open(map);
      }