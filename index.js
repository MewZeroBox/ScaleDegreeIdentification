//----------------------------JSON DATA-----------------------------------------------------------------------------------//
var data = [{
  "name" : "C Major",
  "scale" : "C D E F G A B",
  "degrees" : ["C","D","E","F","G","A","B"]
},
{
  "name" : "D Major",
  "scale" : "D E F# G A B C#",
  "degrees" : ["D","E","F#","G","A","B","C#"]
},
{
  "name" : "E Major",
  "scale" : "E F# G# A B C# D#",
  "degrees" : ["E","F#","G#","A","B","C#","D#"]
},
{
  "name" : "F Major",
  "scale" : "F G A B♭ C D E",
  "degrees" : ["F","G","A","Bb","C","D","E"]
},
{
  "name" : "G Major",
  "scale" : "G A B C D E F#",
  "degrees" : ["G","A","B","C","D","E","F#"]
},
{
  "name" : "A Major",
  "scale" : "A B C# D E F# G#",
  "degrees" : ["A","B","C#","D","E","F#","G#"]
},
{
  "name" : "B Major",
  "scale" : "B C# D# E F# G# A#",
  "degrees" : ["B","C#","D#","E","F#","G#","A#"]
},
{
  "name" : "B♭ Major",
  "scale" : "B♭ C D E♭ F G A B♭",
  "degrees" : ["Bb","C","D","Eb","F","G","A"]
},
{
  "name" : "A♭ Major",
  "scale" : "A♭ B♭ C D♭ E♭ F G",
  "degrees" : ["Ab","Bb","C","Db","Eb","F","G"]
},
{
  "name" : "E♭ Major",
  "scale" : "E♭ F G A♭ B♭ C D",
  "degrees" : ["Eb","F","G","Ab","Bb","C","D"]
}];

//------------------------------------------------------------------------------------------------------------//
var currentScale = data[Math.floor(Math.random() * 10)];
var degreeNames = ["1st","2nd","3rd","4th","5th","6th","7th"];
var allIDs = ["C","D","E","F","G","A","B","C#","D#","E#","F#","G#","A#","B#","Cb","Db","Eb","Fb","Gb","Ab","Bb"]
var currentDegree = Math.floor(Math.random() * 7);
var template = "What is the " + degreeNames[currentDegree] + " degree";
var numCorrect = 0;
var numAttempted = 0;
var attempted = false;

var scaleElementName = document.getElementById('SName');
var scaleElement = document.getElementById('Scale');
var degreeElement = document.getElementById('Degree');
var fractionElement = document.getElementById('fraction');
var percentageElement = document.getElementById('percentage');

scaleElement.innerHTML = currentScale.scale;
scaleElementName.innerHTML = currentScale.name;
degreeElement.innerHTML = template;
fractionElement.innerHTML = numCorrect.toString() + "/" + numAttempted.toString();


if (numAttempted == 0){
  var percentageNumber = 0;
} else {
  var percentageNumber = Math.round(((numCorrect/numAttempted) * 100) * 100) / 100;
}
percentageElement.innerHTML = percentageNumber.toString() + "%";

function checkCorrect(id) {
  var input = id;
  var correctAnswer = currentScale.degrees[currentDegree];
  answer = input == correctAnswer;
  if (attempted == false){
    numAttempted += 1;
  }
  if (answer == false){
    attempted = true;
    makeWrong(id)
  } else {
    if (attempted == false){
      numCorrect += 1;
    }
    attempted = false;
    console.log("starting")
    showCorrect(id);
    timeout = setTimeout(reset,700)
    console.log("ending")
  }
}

function makeWrong(id) {
  wrongElement = document.getElementById(id);
  wrongElement.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--wrong-border-color');
  wrongElement.style.backgroundImage = 'linear-gradient(' +
                                        getComputedStyle(document.documentElement).getPropertyValue('--wrong-bg-gradient1') + ", " +
                                        getComputedStyle(document.documentElement).getPropertyValue('--wrong-bg-gradient2');
}

function reset() {
  currentScale = data[Math.floor(Math.random() * 10)];
  currentDegree = Math.floor(Math.random() * 7);
  template = "What is the " + degreeNames[currentDegree] + " degree";

  scaleElement.innerHTML = currentScale.scale;
  scaleElementName.innerHTML = currentScale.name;
  degreeElement.innerHTML = template;
  fractionElement.innerHTML = numCorrect.toString() + "/" + numAttempted.toString();

  if (numAttempted == 0){
    var percentageNumber = 0;
  } else {
    var percentageNumber = Math.round(((numCorrect/numAttempted) * 100) * 100) / 100;
  }
  percentageElement.innerHTML = percentageNumber.toString() + "%";

  for (var i = 0; i < 21; i++){
    element = document.getElementById(allIDs[i]);
    element.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--default-border-color');
    element.style.backgroundImage = 'linear-gradient(' +
                                          getComputedStyle(document.documentElement).getPropertyValue('--default-bg-gradient1') + ", " +
                                          getComputedStyle(document.documentElement).getPropertyValue('--default-bg-gradient2');
  }
}

function showCorrect(id) {
  correctElement = document.getElementById(id);
  console.log(id, correctElement);
  correctElement.style.borderColor = getComputedStyle(document.documentElement).getPropertyValue('--correct-border-color');
  correctElement.style.backgroundImage = 'linear-gradient(' +
                                        getComputedStyle(document.documentElement).getPropertyValue('--correct-bg-gradient1') + ", " +
                                        getComputedStyle(document.documentElement).getPropertyValue('--correct-bg-gradient2');

}

function toggle() {
  if (scaleElement.style.display === "none") {
    scaleElement.style.display = "block";
  } else {
    scaleElement.style.display = "none";
  }
}
