$(document).ready(function(){
  
  
     $('button').click(function(){
       const inputs = $('input[type= "url"]');
       console.log(inputs)
       const textInput = inputs.val();
       console.log(textInput)
          const aNew = $('a[href=""]')
         // const aNew = $('a').attr('href').length == 0;
          console.log(aNew)
          const newLink = (aNew).attr('href',textInput)
          console.log(newLink)
    
       
       
  })
})
