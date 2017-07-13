//Characters
var anakin = document.getElementById("#anakin-pic");
var anakin = {
  name: "Anakin Skywalker",
  hp: 120,
  ap: 8,
  cap: 15,
  image: '<img id="anakin" src="assets/images/anakin.jpg"/>'
};

var obiwan = {
  name: "Obi Wan Kenobi",
  hp: 150,
  ap: 6,
  cap: 20,
  image: '<img id="obiwan" src="assets/images/obiwan.jpg"/>'
};

var griv = {
  name: "General Grievious",
  hp: 180,
  ap: 5,
  cap: 18,
  image: '<img id="griv" src="assets/images/griv.jpeg"/>'
};

var palpatine = {
  name: "Senator Palpatine",
  hp: 100,
  ap: 4,
  cap: 12,
  image: '<img id="palpatine" src="assets/images/palpatine.jpg"/>'
};

var yourCharacter = "";
var currentEnemy = "";
var yourEnemies = [];
var gameStage = "inital";

//Game function//
$(document).ready(function() {
  //Play theme song//
  var audioElement = document.createElement("audio");
  audioElement.setAttribute("src", "Assets/audio/theme.mp3");
  $(".theme-button").on("click", function() {
    audioElement.play();
  });
  $(".pause-button").on("click", function() {
    audioElement.pause();
  });
  //Only display the available characters upon load//
  $("#yourCharacter").hide();
  $("#yourEnemy").hide();
  $("#battle").hide();
  $("img").on("click", function() {
    //Player selects which character to play as//
    if (gameStage === "inital") {
      $("#yourCharacter").append(this);
      $(this).css("width", "20%");
      $("#yourCharacter").show();
      $("#choose").html("Choose Your Enemy For The First Battle");
      gameStage = "round-1";
      //Player selects the 1st enemy to fight//
    } else if (gameStage === "round-1") {
      $("#yourEnemy").append(this);
      $(this).css("width", "20%");
      $("#yourEnemy").show();
      $("#battle").show();
      $("#choose").html("Your Enemies Awating For The Next Battle");
      gameStage = "round-1-battle";
    }
  });
});
