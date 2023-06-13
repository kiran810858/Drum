var numOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numOfDrums; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "K":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "i":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "r":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "n":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "N":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "S":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log(buttonInnerHtml);
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}


/*var audio=new Audio("sounds/tom-1.mp3");
audio.play();*/