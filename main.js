//add contact form with validation w/php

//BTLC Leaflet map
$( document ).ready(function() {
var mymap = L.map('map-container').setView([48.448870, -120.200412], 13);
//css was targeting #map not map-container and throwing everything off.

//
L.tileLayer('https://api.mapbox.com/styles/v1/georginaj/cizxj905p002t2smj9nek0aey/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2VvcmdpbmFqIiwiYSI6ImNpeXRya3VwYTAwMWIzMm1teXkxOHRwNWIifQ.nk06wXItEzOgZNWLcMMCLQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox://styles/mapbox/streets-v10', //added id and accessToken
    accessToken: 'pk.eyJ1IjoiZ2VvcmdpbmFqIiwiYSI6ImNpeXRya3VwYTAwMWIzMm1teXkxOHRwNWIifQ.nk06wXItEzOgZNWLcMMCLQ'
}).addTo(mymap);

L.marker([48.448870, -120.200412]).addTo(mymap) //changed to mymap
    .bindPopup('Big Twin Lake Campground<br> 210 Twin Lakes Rd<br> Winthrop, WA 98862')
    .openPopup();

});//onReady closing tag

//Scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
