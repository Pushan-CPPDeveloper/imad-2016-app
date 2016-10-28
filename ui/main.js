var button=document.getElementById("counter");
var counter = 0;
button.onclick = function() {
   // make request
   var request=new XMLHttpRequest();
   
   //capture request
   request.onreadystatechange = function(){
       if(request.readyState===XMLHttpRequest.DONE){
           if(request.status===200){
               var counter=request.responseText;
               var span=document.getElementById("count");
               span.innerHTML=counter.toString();
           }
       }
   };
   //render variable in correct span
   request.open('GET', 'http://pushan-cppdeveloper.imad.hasura-app.io/counter', true);
   request.send(null);
};