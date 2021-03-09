
document.getElementById("goi").style.display = "none";
document.getElementById("bstand").style.display = "none";
document.getElementById("snpark").style.display = "none";
document.getElementById("plake").style.display = "none";

function customEasing(t) { return 1 - Math.abs(Math.sin(2.0)) * Math.pow(0.5, t); }

var mumbaiT;
function mumbaiTimer() {
    document.getElementById("goi").style.display = "initial";
    document.getElementById("bstand").style.display = "initial";
    document.getElementById("snpark").style.display = "initial";
    document.getElementById("plake").style.display = "initial";
    document.getElementById("mumbai").style.display = "none";    
    clearInterval(mumbaiT);
}
var snparkT;
function snparkTimer() {
    document.getElementById("snpark").innerHTML= "Lets Explore More";        
    document.getElementById("bstand").style.display = "none";
    document.getElementById("goi").style.display = "none";
    document.getElementById("plake").style.display = "none";
    document.getElementById("snpark").addEventListener("click", function(){                                         
        window.location.href = "mapsSnpark.html";        
        clearInterval(snparkT);       
    });     
} 
var plakeT;
function plakeTimer() {
    document.getElementById("plake").innerHTML= "Lets Explore More";        
    document.getElementById("bstand").style.display = "none";
    document.getElementById("goi").style.display = "none";
    document.getElementById("snpark").style.display = "none";
    document.getElementById("plake").addEventListener("click", function(){                                         
        window.location.href = "mapsPlake.html";        
        clearInterval(plakeT);       
    });     
} 
var goiT;
function goiTimer() {
    document.getElementById("goi").innerHTML= "Lets Explore More";        
    document.getElementById("bstand").style.display = "none";
    document.getElementById("snpark").style.display = "none";
    document.getElementById("plake").style.display = "none";
    document.getElementById("goi").addEventListener("click", function(){                                         
        window.location.href = "mapsGoi.html";        
        clearInterval(goiT);       
    });    
   
}

var bstandT;

function bstandTimer() {
    document.getElementById("bstand").innerHTML= "Lets Explore More";    
    document.getElementById("goi").style.display = "none";
    document.getElementById("snpark").style.display = "none";
    document.getElementById("plake").style.display = "none";
    document.getElementById("bstand").addEventListener("click", function(){                                         
        window.location.href = "mapsBstand.html";        
        clearInterval(bstandT);
    });    

    
}
require([
  "esri/Map",
  "esri/views/SceneView",
  "esri/Basemap",
  "esri/layers/TileLayer",
  "esri/layers/FeatureLayer",
  "esri/widgets/LayerList",
  "esri/request",
  "esri/Graphic",
  "dojo/domReady!" // will not be called until DOM is ready
  ], function (
        
  Map,
  SceneView,
  Basemap,
  TileLayer,
  FeatureLayer,
  LayerList,
  request,
  Graphic
  ) {

    const satelliteLayer = new TileLayer({
      url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer",
      title: "satellite"
    })
    
    const basemap = new Basemap({
      baseLayers: [satelliteLayer],
      title: "half-earth-basemap",
      id: "half-earth-basemap"
    });

    const map = new Map({
      basemap: basemap,
      layers: [basemap, basemap]
    });
  
    const view = new SceneView({      
      map: map,
      container: "sceneContainer",
      environment: {
        atmosphereEnabled: true,
        background: {
          type: "color",
          color: [0,0,0]
        }
      },
      ui: {
        components: ["attribution"]
       }
    });
  document.getElementById("mumbai").addEventListener("click", function() {
          var animation=view.goTo(
            {
              position: {
                x: 72.8347,
                y: 18.9220,
                z: 400000,
                spatialReference: {
                  wkid: 4326
                }
              },
              heading: 0,
              tilt: 0
            },
            
            {
              speedFactor: 0.5,
              easing: customEasing
            }
          )
          mumbaiT = setInterval(mumbaiTimer, 4400);
    
        }); 
  document.getElementById("goi").addEventListener("click", function() {
              
          setTimeout(function(){
              
          var animation=view.goTo(
            {              
              position: {
                x: 72.8347,
                y: 18.9220,
                z: 400,
                spatialReference: {
                  wkid: 4326
                }
              },
              heading: 0,
              tilt: 0
            },
            
            {
              speedFactor: 0.5,
              easing: customEasing
            }
          )
           goiT = setInterval(goiTimer, 4400);
          });
          
        }); 
        document.getElementById("bstand").addEventListener("click", function() {
              
            setTimeout(function(){
                
            var animation=view.goTo(
              {              
                position: {
                  x: 72.819246,
                  y: 19.04065,
                  z: 1100,
                  spatialReference: {
                    wkid: 4326
                  }
                },
                heading: 0,
                tilt: 0
              },
              
              {
                speedFactor: 0.5,
                easing: customEasing
              }
            )
             bstandT = setInterval(bstandTimer, 4400);
            });
            
          }); 
          document.getElementById("snpark").addEventListener("click", function() {
              
            setTimeout(function(){
                
            var animation=view.goTo(
              {              
                position: {
                  x: 72.9182,
                  y: 19.2288,
                  z: 1100,
                  spatialReference: {
                    wkid: 4326
                  }
                },
                heading: 0,
                tilt: 0
              },
              
              {
                speedFactor: 0.5,
                easing: customEasing
              }
            )
             snparkT = setInterval(snparkTimer, 4400);
            });
            
          }); 
          document.getElementById("plake").addEventListener("click", function() {
              
            setTimeout(function(){
                
            var animation=view.goTo(
              {              
                position: {
                  x: 72.9048,
                  y: 19.1273,
                  z: 3100,
                  spatialReference: {
                    wkid: 4326
                  }
                },
                heading: 0,
                tilt: 0
              },
              
              {
                speedFactor: 0.5,
                easing: customEasing
              }
            )
             plakeT = setInterval(plakeTimer, 4400);
            });
            
          });

    });
