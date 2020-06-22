// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment.
//
(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0;i< names.length;i++) {

  
  var firstLetter =names[i].charAt(0);
  var lowercaseletter=firstLetter.toLowerCase();

  if (lowercaseletter === "j") {
    // byeSpeaker.xxxx
    byeSpeaker.speak(names[i]);
  } else {
    // helloSpeaker.xxxx
    helloSpeaker.speak(names[i]);
  }
}

})();
