//Characters//
$("#anakin-pic").data({
  "name": "Anakin Skywalker",
  "hp": 150,
  "ap": 10,
  "cap": 12,
  "baseAp": 8
});

$("#obiwan-pic").data({
  "name": "Obi Wan Kenobi",
  "hp": 180,
  "ap": 7,
  "cap": 18
});

$("#griv-pic").data({
  "name": "General Grievious",
  "hp": 160,
  "ap": 8,
  "cap": 15
});

$("#palpatine-pic").data({
  "name": "Senator Palpatine",
  "hp": 145,
  "ap": 12,
  "cap": 12
});

//Game stage that prevents duplicate character selections//
var gameStage = "choose-character";

//Emtpy variable to store data//
var currentAttackPower = 0;
var currentCharacterHp = "";
var currentEnemyHp = "";

//Functions to reduce repetitive codes//
function showContent() {
  $("#yourEnemy").fadeIn();
  $("#battle").fadeIn();
  $("#attack-btn").fadeIn();
}

//Function that increments your character's attack power by the base power//
function inBattle() {
  currentAttackPower += charAttr.ap;
  charAttr.hp -= enemyAttr.cap;
  enemyAttr.hp -= currentAttackPower;
  $("#characterAttr").html(charAttr.hp);
  $("#enemyAttr").html(enemyAttr.hp);
}

//Upon defeating your enemy, hide the display boxes//
function removeLoser() {
  $("#enemyPic").empty();
  $("#yourEnemy").fadeOut();
  $("#battle").fadeOut();
}

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
  $("#logo").prop("onclick", false);
  //Display the character selection box upon load//
  $("#yourCharacter").hide();
  $("#yourEnemy").hide();
  $("#battle").hide();
  $("img").on("click", function() {

    //Player selects which character to play as//
    if (gameStage === "choose-character") {
      $("#characterPic").append(this);
      charAttr = $(this).data();
      $(this).css("width", "20%");
      $("#yourCharacter").fadeIn();
      $("#choose").html("Choose Your Enemy For The First Battle");
      $("#characterName").html(charAttr.name);
      $("#characterAttr").html(charAttr.hp);
      gameStage = "choose-1st-enemy";

      //Player selects the 1st enemy to fight//
    } else if (gameStage === "choose-1st-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      showContent();
      $(this).css("width", "20%");
      $("#choose").html("Fight Your Enemy By Clicking The Attack Button!");
      $("#enemyName").html(enemyAttr.name);
      $("#enemyAttr").html(enemyAttr.hp);
      gameStage = "battle-1";

      //Player selects the 2nd enemy to fight//
    } else if (gameStage === "choose-2nd-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      showContent();
      $(this).css("width", "20%");
      $("#choose").html("Fight Your Enemy By Clicking The Attack Button!");
      $("#enemyName").html(enemyAttr.name);
      $("#enemyAttr").html(enemyAttr.hp);
      gameStage = "battle-2";

      //Player fights the last enemy//
    } else if (gameStage === "choose-3rd-enemy") {
      $("#enemyPic").append(this);
      enemyAttr = $(this).data();
      showContent();
      $(this).css("width", "20%");
      $("#enemyName").html(enemyAttr.name);
      $("#enemyAttr").html(enemyAttr.hp);
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
      inBattle();
      // console.log(charAttr.hp);
      console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You have won the battle! Choose your next enemy");
        gameStage = "choose-2nd-enemy";
        $("#choose").html("Choose Your Enemy For The Second Battle");
        removeLoser();
      } else if (charAttr.hp <=0) {
        alert("You have been defeated. Choose your opponent wisely...");
        location.reload();
      }

      //Second battle//
    } else if (gameStage === "battle-2") {
      inBattle();
      // console.log(charAttr.hp);
      // console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You have won the battle! Choose your next enemy");
        gameStage = "choose-3rd-enemy";
        $("#choose").html("Your Enemy For The Final Battle");
        removeLoser();
      } else if (charAttr.hp <=0) {
        alert("You have been defeated. Choose your opponent wisely...");
        location.reload();
      }

      //Last battle//
    } else if (gameStage === "battle-3") {
      inBattle();
      // console.log(charAttr.hp);
      // console.log(enemyAttr.hp);
      if (enemyAttr.hp <= 0) {
        alert("You Brought Justice and Peace to the Galaxy!");
        $("#select-character").fadeIn();
        $("#choose").html("You Are Victorious! Reload The Page To Play Again");
        removeLoser();
      } else if (charAttr.hp <=0) {
        alert("You have been defeated. Choose your opponent wisely...");
        location.reload();
      }
    }
  });
});
