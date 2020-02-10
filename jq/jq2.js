      
    
$(document).ready(function(){
    $('button').click(function(){
        const input1 = $('input[type = "text"]');
        const input2 = $('input[type = "url"]');
  
        const textInput1 = input1.val();
        const textInput2 = input2.val();

       
            
        
        // const aNew = $('a').attr('href').length == 0;
         const textLink = ('a[href != 0]').val(textInput1);
         const varLink = ('a[href = ""]').attr('href ',textInput2)
            
        
   
      
      
 })
})