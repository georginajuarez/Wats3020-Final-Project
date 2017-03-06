//add contact form with validation w/php
<<<<<<< HEAD
=======

//BTLC Leaflet map
$( document ).ready(function() {
var mymap = L.map('map-container').setView([46.876217, -121.728493], 13);


//
L.tileLayer('https://api.mapbox.com/styles/v1/georginaj/cizxj905p002t2smj9nek0aey/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvcmdpbmFqIiwiYSI6ImNpeXRya3VwYTAwMWIzMm1teXkxOHRwNWIifQ.nk06wXItEzOgZNWLcMMCLQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
}).addTo(mymap);

L.marker([46.876217, -121.728493]).addTo(map)
    .bindPopup('Big Twin Lake Campground')
    .openPopup();

});//onReady closing tag
>>>>>>> master
