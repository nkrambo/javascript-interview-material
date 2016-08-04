
// jQuery's $.ajax() function is used to perform an asynchronous HTTP request.
// It also has 3 ajax shorthand methods: $.get(), $.post(), and $.load() for simple ajax requests.

$.ajax(url[, options])
$.ajax([options])

// The url parameter is a string containing the URL you want to reach with the Ajax call,
// while options is an object literal containing the configuration for the Ajax request.

// There are a lot of different options you can specify to bend $.ajax() to your need.

// example 1. On button click load data
$('#main-menu a').click(function(event) {
   event.preventDefault();

   $.ajax(this.href, {
      success: function(data) {
         $('#main').html($(data).find('#main *'));
         $('#notification-bar').text('The page has been successfully loaded');
      },
      error: function() {
         $('#notification-bar').text('An error occurred');
      }
   });
});

// example 1. Grab data from api endpoint and append
$.ajax({
   url: 'http://api.joind.in/v2.1/talks/10889',
   data: {
      format: 'json'
   },
   error: function() {
      $('#info').html('<p>An error has occurred</p>');
   },
   dataType: 'jsonp',
   success: function(data) {
      var $title = $('<h1>').text(data.talks[0].talk_title);
      var $description = $('<p>').text(data.talks[0].talk_description);
      $('#info')
         .append($title)
         .append($description);
   },
   type: 'GET'
});

// GET shorthand
// Load data from the server using a HTTP GET request.

$.get( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
  alert( "Load was performed." );
});

// POST shorthand
// Load data from the server using a HTTP POST request.

$.post( "ajax/test.html", function( data ) {
  $( ".result" ).html( data );
});

// .getJSON
// Load JSON-encoded data from the server using a GET HTTP request.
$.getJSON( "ajax/test.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<li id='" + key + "'>" + val + "</li>" );
  });

  $( "<ul/>", {
    "class": "my-new-list",
    html: items.join( "" )
  }).appendTo( "body" );
});

// .load shorthand
// Load data from the server and place the returned HTML into the matched element.
// This method is the simplest way to fetch data from the server.
// It is roughly equivalent to $.get(url, data, success) except that it is a method
// rather than global function and it has an implicit callback function.

$( "#result" ).load( "ajax/test.html" );

// .getScript shorthand
// Load a JavaScript file from the server using a GET HTTP request, then execute it.

$.getScript( "ajax/test.js" )
  .done(function( script, textStatus ) {
    console.log( textStatus );
  })
  .fail(function( jqxhr, settings, exception ) {
    $( "div.log" ).text( "Triggered ajaxError handler." );
});

// http://api.jquery.com/jquery.ajax/
