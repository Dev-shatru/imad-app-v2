//console.log('Loaded!');
//counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //Create request object
    var request = XMLHttpRequest();
    //Capture the request and store
    request.onreadystatechange === function(){
   
    if(request == XMLHttpRequest.DONE){
       //Take some action
       if(request.status === 200){
           var counter = request.responseText;
           var span = document.getElementById('count');
           span.innerHtml = counter.toString();
       }
    }
    //Not yet done
  };
    //Make the request
    
    request.open('GET', 'https://cloud.imad.hasura.io/counter', true);
    request.send(null);
};