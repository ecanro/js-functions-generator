$(document).on('load', function(){
   


$('button').click(function (e) { 
        e.preventDefault();
        
    });

    $.ajax({
        url: "htto://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=1111111111",
        data: {
          zipcode: 97201
        },
        success: function( result ) {
          $( "#weather" ).html( "<strong>" + result + "</strong> degrees" );
        }
      });
    });