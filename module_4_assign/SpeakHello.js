(function(){

var helloSpeaker = {};

helloSpeaker.speak = function(){
  window.speak=speak;
}

var speakWord = "Hello";


helloSpeaker.speak = function speak(name) {
  console.log(speakWord + " " + name);
}


 window.helloSpeaker = helloSpeaker;
})();