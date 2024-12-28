   $(document).ready(function(){
   
      //var iframe = $("#zcWebOptin" ).val();
     $("#zcWebOptin").click(function(){
        alert("The paragraph was clicked.");
      });
        //alert(iframe);
        var pop_up_action = $.cookie("pop_up_action");
        var pop_up_action_for_one_day = $.cookie("pop_up_action_for_one_day");
        var pop_up_action_for_one_year = $.cookie("pop_up_action_for_one_year");
        if(pop_up_action_for_one_day || pop_up_action_for_one_year){
          $('#page_banner').hide(); 
        }

       $("body").mouseleave(function(){
         if (!pop_up_action_for_one_year) {
          if(!pop_up_action_for_one_day) {
          if(pop_up_action_for_one_day == false || pop_up_action_for_one_day == undefined || pop_up_action_for_one_year == false ||  pop_up_action_for_one_year == undefined ){         
            $('#page_banner').fadeIn(1500); 
          }
          else{
            $('#page_banner').hide();
            $('#page_banner').fadeOut(1500);  
          }
        }
       } 
       
    //Don't show pop up for next 1 day if the user closes the popup via close button

    let close_popup = function () {
    $.cookie('pop_up_action_for_one_day', 'true', { expires: 1, path: '/' });
    }




    //Don't show pop up for next 365 days if the user filled  the popup via filled
      
       let popup_submitted = function () {
            $.cookie('pop_up_action_for_one_day', 'true', { expires: 365, path: '/' });
           
        }

  })
     
});

