var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init ();

function init(){
  setupModeButtons();
  setupSquares();
  reset();
}

//modeButtons
function setupModeButtons(){
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function(){
      this.classList.add("selected");
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

//oyun setup
function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    //rengi   karelere eklenmesi.
    squares[i].style.background = colors[i];
    //seçilen kareye event ekleme.
    squares[i].addEventListener("click", function(){
      //tıklanan renk'e karenin renk'ini atama.
      var clickedColor = this.style.background;
      //tıklanan renk ile sorulan renk karsılastırması.
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.background = pickedColor;
      }
      else {
        this.style.background = "#232323";
        messageDisplay.textContent = "Try Again!";
      }
    });
  }
}

function reset(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Color";
  h1.style.background = "steelblue";
  messageDisplay.textContent = "";
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.background = colors[i];
      squares[i].style.display = "block";
    }
    else {
      squares[i].style.display = "none";
    }
  }
}

//Reset buttonuna tıklanınca event olusturma.
resetButton.addEventListener("click", function(){
  reset();
})

function changeColors(color){
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = color;
  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //array olustur.
  var arr = []
  //array'e rastgele renk ekleme.
  for (var i = 0; i < num; i++) {
  //rastgele renk çagır ve arr'e yukle.
  arr.push(randomColor());
    }
  //array'e döndür.
  return arr;
}

function randomColor(){
  // "kırmızı" 0 - 255 arasından seç.
  var r = Math.floor(Math.random() * 256);
  // "yesil" 0 - 255 arasından seç.
  var g = Math.floor(Math.random() * 256);
  // "mavi" 0 - 255 arasından seç.
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
