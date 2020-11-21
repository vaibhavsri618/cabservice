$(document).ready(function(){

    $("#cars").change(function(){

        $cars=$("#cars").val();
        

        console.log($cars);

        $("#weight").attr("disabled",$cars=="cedmicro");
        $("#error").html("Extra Luggage facility is not available in cedmicro");

        if($cars=="cedmicro")
        $("#error").show();
        else
        $("#error").hide();

    
    
    });


    $("#weight").bind("keypress", function (e) {
        var keyCode = e.which ? e.which : e.keyCode
             
        if (!(keyCode >= 48 && keyCode <= 57)) {
           return false;
        }
    });

    $("#submit").click(function(a){

        a.preventDefault();

        var pick=$("#pick").val();
        var drop=$("#drop").val(); 
        var cars=$("#cars").val(); 
        var weight=$("#weight").val();
        console.log(pick);

        console.log(drop);

       
        $("#error1").html("Please Choose any pickup location");
        $("#error2").html("Please Choose any Drop location");
        $("#error3").html("Please Choose any one car category");
      
      
        
        


        if(pick=="0")
        {
            
            $("#error1").show();
            $("#res").hide();
           
        }
        else
        {
        $("#error1").hide();
        $("#res").show();
        }

        if(drop=="10")
        {
           
            $("#error2").show();
            $("#res").hide();
        }
        else
        {
        $("#error2").hide();
        $("#res").show();
        }

        if(cars=="20")
        {
           
            $("#error3").show();
            $("#res").hide();
        }
        else
        {
        $("#error3").hide();
        $("#res").show();
        }
       

        if(drop==pick)
        {
            $("#error").html("Drop and pickup can't be same");
            $("#error").show();
            $("#res").hide();
        }
        else
        {
            $("#error").hide();
            $("#res").show();
            
        }

        
        console.log(cars);
        console.log(weight);



    $.ajax({
        type: 'post',
        url: 'cab.php',
        data:{
            pick:pick,
            drop:drop,
            cars:cars,
            weight:weight

        },
        success: function (answer) {
           
          $("#res").html(answer);
          
        }
      });

    });


});