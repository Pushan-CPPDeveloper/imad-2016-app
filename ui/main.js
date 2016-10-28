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

var submit = document.getElementById("submit_btn");
submit.onclick=function(){
     // make request
   var request=new XMLHttpRequest();
   
   //capture request
   request.onreadystatechange = function(){
                   if(request.readyState===XMLHttpRequest.DONE){
                       if(request.status===200){
                          var names=request.responseText;
                          name=JSON.parse(names);
            var list ='';
            for(var i  =0; i< names.length; i++){
                list += '<li>'+names[i]+'<li>' ;
            }
                var ul = document.getElementById("namelist");
                ul.innerHTML=list;
           }
       }
   };
   var nameInput=document.getElementById("name");
var name=nameInput.value;
   //render variable in correct span
   request.open('GET', 'http://pushan-cppdeveloper.imad.hasura-app.io/submit-name='+name, true);
   request.send(null);//request to server with name sending to it
    //capture list with entry got
};