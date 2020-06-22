(function(){

var byeSpeaker = {};

byeSpeaker.speak=function(){
window.speak= speak;
}

var speakWord = "Good Bye";

byeSpeaker.speak=function speak(name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker= byeSpeaker;
})();