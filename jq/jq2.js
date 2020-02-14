      
    
$(document).ready(function(){
    $('button').click(function(){
        const input1 = $('input[type = "text"]');
        const input2 = $('input[type = "url"]');
  
        const textInput1 = input1.val();
        const textInput2 = input2.val();

        const aNewtext = $('a').attr('href').length > 0;
        const aNewLink = $('a[href=""]')
        
        // const aNew = $('a').attr('href').length == 0;
         aNewtext = (aNewtext).attr('text',textInput1);
         aNewLink= (aNewLink).attr('href ',textInput2)
            
        
   
      
      
 })
})