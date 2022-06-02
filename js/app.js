/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/
let board, turn, winner


/*------------------------ Cached Element References ------------------------*/
// let squareOne = document.querySelector("#sq0")
// let squareTwo = document.querySelector("#sq1")
// let squareThree = document.querySelector("#sq2")
// let squareFour = document.querySelector("#sq3")
// let squareFive = document.querySelector("#sq4")
// let squareSix = document.querySelector("#sq5")
// let squareSeven = document.querySelector("#sq6")
// let squareHeight = document.querySelector("#sq7")
// let squareNine = document.querySelector("#sq8")

const messageEl = document.querySelector(".message")

// const squareEls = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareHeight, squareNine]

const squareEls = document.querySelectorAll('.square')



/*----------------------------- Event Listeners -----------------------------*/
// form.addEventListener("click", function (evt)){
//   evt.preventDefault()

//   handleClick()


// }


/*-------------------------------- Functions --------------------------------*/


init()

function init(){
  board = [null, null, null, null, null, null, null, null, null ]
  turn = 1
  winner = null
  
  render()


}



function render(){
  let sqIndex

  
    board.forEach(square => {
      square = squareEls[board.indexOf(square)]
      console.log(square)
    });
  }

  function render() {
    board.forEach((element, idx) => {
      console.log(idx)
      console.log(element)
    });
  }

console.log(render())
