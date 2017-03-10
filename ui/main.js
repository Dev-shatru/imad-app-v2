//console.log('Loaded!');
//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //Create request object
    var request = new XMLHttpRequest();
    
    //Capture the request and store
      request.onreadystatechange = function(){
   
    if(request.readyState === XMLHttpRequest.DONE){
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