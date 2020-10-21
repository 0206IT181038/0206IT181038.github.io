function calculation()
    {
        var bill=document.getElementById("bill").value;
        var service=document.getElementById("service").value;
        var people=document.getElementById("people").value;
        
        var result=(parseFloat(bill)*parseFloat(service)/100)/parseFloat(people);
        
         if (!isNaN(result))
         {
             document.getElementById("answer").innerHTML="TIP AMOUNT" +"<br>"+" "+"$" +result;
         }
    
    }

  const button  =  document.querySelector('#button')

  button.addEventListener('click', (event)=>{
      event.preventDefault();
      calculation();
  });

 console.log('connect!')