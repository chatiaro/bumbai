function initPano() {
    // Note: constructed panorama objects have visible: true
    // set by default.  
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById("map"),
      {          
        position: { lat:b, lng:a },
        addressControlOptions: {
          position: google.maps.ControlPosition.BOTTOM_CENTER,
        },
        linksControl: false,
        panControl: false,
        enableCloseButton: false,
        disableDefaultUI: true,
      }
    );
  }