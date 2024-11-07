function newMessage(topicName) {
    // Write your code here
    let element = document.querySelectorAll(`p[data-topic-name=${topicName}]`);   
    for(var i=0;i<element.length;i++){
      element[i].style.backgroundColor="red";
      element[i].onclick = function(i){
        alert(i);
      }
    }
    // element.forEach(ele=>ele.style.backgroundColor="red");
  }
  
  // Example case
  document.body.innerHTML = `<div>
    <p data-topic-name="discussion">General discussion</p>
    <p data-topic-name="bugs">Bugs</p>
    <p data-topic-name="animals">Animals</p>
  </div>`;
  newMessage("discussion");
  console.log(document.body.innerHTML);

  function registerHandlers() {
    var as = document.getElementsByTagName('a');
    for (var i = 0; i < as.length; i++) {
      as[i].onclick = function(i) {
        alert(i);
        return false;
      }
    }
  }