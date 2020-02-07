$(windows).on('load', function(){
   


$('button').click(function (e) { 
        e.preventDefault();
        
    });

    $.ajax({
        url: "/api/getWeather",
        data: {
          zipcode: 97201
        },
        success: function( result ) {
          $( "#weather" ).html( "<strong>" + result + "</strong> degrees" );
        }
      });
    });