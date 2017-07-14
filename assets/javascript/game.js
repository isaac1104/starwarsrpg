//Characters//
$("#anakin-pic").data({
  "name": "Anakin Skywalker",
  "hp": 120,
  "ap": 8,
  "cap": 15
});

$("#obiwan-pic").data({
  "name": "Obi Wan Kenobi",
  "hp": 150,
  "ap": 6,
  "cap": 20
});

$("#griv-pic").data({
  "name": "General Grievious",
  "hp": 180,
  "ap": 5,
  "cap": 18
});

$("#palpatine-pic").data({
  "name": "Senator Palpatine",
  "hp": 100,
  "ap": 4,
  "cap": 12
});

//Game stage that prevents duplicate selections//
var gameStage = "choose-character";

//Game function//
$(document).ready(function() {
  //Play & pause theme song//
  var getAudio = document.createElement("audio");
  getAudio.setAttribute("src", "Assets/audio/theme.mp3");
  $(".theme-button").on("click", function() {
    getAudio.play();
  });
  $(".pause-button").on("click", function() {
    getAudio.pause();
  });
  //Display the character selection box upon load//
  $("#yourCharacter").hide();
  $("#yourEnemy").hide();
  $("#battle").hide();
  $("img").on("click", function() {
    //Player selects which character to play as//
    if (gameStage === "choose-character") {
      $("#characterPic").append(this);
      charAttr = $(this).data();
      console.log(charAttr);
      $(this).css("width", "20%");
      $("#yourCharacter").fadeIn();
      $("#characterAttr").text(charAttr.name + " / " + "HP= " + charAttr.hp);
      $("#choose").html("Choose Your Enemy For The First Battle");
      gameStage = "choose-1st-enemy";

      //Player selects the 1st enemy to fight//
    } else if (gameStage === "choose-1st-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      console.log(enemyAttr);
      $(this).css("width", "20%");
      $("#yourEnemy").fadeIn();
      $("#battle").fadeIn();
      $("#attack-btn").fadeIn();
      $("#enemyAttr").text(enemyAttr.name + " / " + "HP= " + enemyAttr.hp);
      $("#choose").html("Your Enemies Awating For The Next Battle");
      gameStage = "battle-1";

      //Player selects the 2nd enemy to fight//
    } else if (gameStage === "choose-2nd-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      console.log(enemyAttr);
      $(this).css("width", "20%");
      $("#yourEnemy").fadeIn();
      $("#battle").fadeIn();
      $("#attack-btn").fadeIn();
      $("#enemyAttr").text(enemyAttr.name + " / " + "HP= " + enemyAttr.hp);
      $("#choose").html("Your Enemies Awating For The Next Battle");
      gameStage = "battle-2";

      //Player fights the last enemy//
    } else if (gameStage === "choose-3rd-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      console.log(enemyAttr);
      $(this).css("width", "20%");
      $("#yourEnemy").fadeIn();
      $("#battle").fadeIn();
      $("#attack-btn").fadeIn();
      $("#enemyAttr").text(enemyAttr.name + " / " + "HP= " + enemyAttr.hp);
      $("#select-character").fadeOut();
      gameStage = "battle-3";
    }
  });

  //Make sure the attack button triggers only once//
  $("#attack").unbind("click");
  $("#attack").on("click", function() {
    //Lightsaber sound effect//
    var attackAudio = document.createElement("audio");
    attackAudio.setAttribute("src", "Assets/audio/fight.mp3");
    attackAudio.play();

    //First battle//
    if (gameStage === "battle-1") {
      charAttr.ap = charAttr.ap++;
      charAttr.hp -= enemyAttr.cap;
      enemyAttr.hp -= charAttr.ap;
      console.log(charAttr.hp);
      console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You have won the battle! Choose your next enemy");
        gameStage = "choose-2nd-enemy";
        $("#enemyPic").empty();
        $("#yourEnemy").fadeOut();
        $("#battle").fadeOut();
      } //Make losing condition if player health >= 0//

      //Second battle//
    } else if (gameStage === "battle-2") {
      charAttr.ap += charAttr.ap;
      charAttr.hp -= enemyAttr.cap;
      enemyAttr.hp -= charAttr.ap;
      console.log(charAttr.hp);
      console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You have won the battle! Choose your next enemy");
        gameStage = "choose-3rd-enemy";
        $("#enemyPic").empty();
        $("#yourEnemy").fadeOut();
        $("#battle").fadeOut();
      }

      //Last battle//
    } else if (gameStage === "battle-3") {
      charAttr.ap += charAttr.ap;
      charAttr.hp -= enemyAttr.cap;
      enemyAttr.hp -= charAttr.ap;
      console.log(charAttr.hp);
      console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You Brought Justice and Peace to the Galaxy!");
        $("#yourEnemy").empty();
        $("#yourEnemy").fadeOut();
        $("#battle").fadeOut();
      }
    }
  });
});
