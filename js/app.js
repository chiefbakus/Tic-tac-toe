


// Step 1 - Define the required variables used to track the state of the game

  // a) Use a variable named `board` to represent the state of the squares on
  //    the board.

  let board
  // b) Use a variable named `turn` to track whose turn it is.
        let turn
  // c) Use a variable named `winner` to represent if anyone has won yet, or if 
  //    a tie has occurred.
        let tie
// Step 2 - Store cached element references

  // a) In a constant called `squareEls`, store the nine elements representing 
  //    the squares on the page.
  let squareOne = document.querySelector("#sq0")
  let squareTwo = document.querySelector("#sq1")
  let squareThree = document.querySelector("#sq2")
  let squareFour = document.querySelector("#sq3")
  let squareFive = document.querySelector("#sq4")
  let squareSix = document.querySelector("#sq5")
  let squareSeven = document.querySelector("#sq6")
  let squareHeight = document.querySelector("#sq7")
  let squareNine = document.querySelector("#sq8")
  
  const squareEls = [squareOne, squareTwo, squareThree, squareFour, squareFive, squareSix, squareSeven, squareHeight, squareNine]

  // b) In a constant called `messageEl`, store the element that displays the 
  //    game's status on the page.

  const messageEl = document.querySelector(".message")

// Step 3 - Upon loading, the game state should be initialized, and a function 
//          should be called to render this game state

  // a) Create a function init()
  // b) Call this `init` function when the app loads.

  // c) Set the `board` variable to an array containing nine `null`s to 
  //    represent empty squares.

  // d) Set the `turn` to `1` - which will represent player X.

  // e) Set the `winner` to `null`.
  // f) Call a function called `render` at the end of the `init` function.

init()

function init(){
  board = [null, null, null, null, null, null, null, null, null ]
  let turn = 1
  winner = null
  
  render()








// Step 4 - The state of the game should be rendered to the user

  // a) Create a function called `render`.

  // b) Loop over `board` and for each element:
  //    - Use the current index of the iteration to access the corresponding 
  //      square in the `squareEls` array.
  //    - Style that square however you wish, dependent on the value contained 
  //      in the current cell being iterated over (`-1`, `1`, or `null`).

  // function render() {
  //   board.forEach(function(square, idx) {

  //     let board_idx = board[idx] 
      
  //     let squarel_idx = squareEls[idx]
  //     board_idx = squarel_idx

  // c) Render a message based on the current game state:
  //    - If winner has a value of `null` (meaning the game is still in
  //      progress), render whose turn it is.
  //    - If `winner` is equal to `'T'` (tie), render a tie message.
  //    - Otherwise, render a congratulatory message to the player that has won.






  function render() {
    board.forEach((square,idx) => {
      if (square === 1) {
      squareEls[idx].textContent = "X"
      } else if (square === -1) {
        squareEls[idx].textContent = "0"
      } else {
        squareEls[idx].textContent = ''
      }

      
    })
    
  
}




  const winningCombos = 
  [
      
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],

]

// Step 6 - Handle a player clicking a square with a `handleClick` function


   // a) Create a function called `handleClick`. It will have an `evt` parameter.

  // b) Attach an event listener to the game board. On the `'click'` event, it 
  //    should call the `handleClick` function you created in 6a.

  // c) Obtain the index of the square that was clicked by "extracting" the 
  //    index from an `id` assigned to the element in the HTML. Assign this to 
  //    a constant called `sqIdx`.

  // d) If the `board` has a value at the `sqIdx`, immediately `return` because 
  //    that square is already taken. Also, if `winner` is not `null`
  //    immediately `return` because the game is over.

  // e) Update the `board` array at the `sqIdx` with the current value of
  //    `turn`.

  // f) Change the turn by multiplying `turn` by `-1` (this flips a `1` to
  //    `-1`, and vice-versa).

  // g) Set the `winner` variable if there's a winner by calling a new 
  //    function: `getWinner`.

  // h) All the state has been updated so we need to render our updated state 
  //    to the user by calling the `render` function we wrote earlier.


 

// Step 7 - Build the `getWinner` function

  // a) Create a function called `getWinner`

  /* 
   * There are two methods you can use to find out if there is a winner.
   *
   * Step b1 below is a more elegant method that takes advantage of the
   * `winningCombos` array you wrote above in step 5. 
   *
   * Step b2 might be a little simpler to comprehend, but you'll need to write  
   * more code. Step b2 also won't take advantage of the `winningCombos`
   * array, but using it as a reference will help you build a solution.
   * ***Ensure you choose only one path.***
   */

  // b1) Loop through each of the winning combination arrays defined in the 
  //     `winningCombos` array. Total up the three board positions using the 
  //     three indexes in the current combo. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at
  //     the index specified by the first index of that winning combination's
  //     array by returning that value.

  // b2) For each one of the winning combinations you wrote in step 5, find the
  //     total of each winning combination. Convert the total to an absolute 
  //     value (convert any negative total to positive). If the total equals 3, 
  //     we have a winner! Set the `winner` variable to the board's value at 
  //     the index specified by the first index of that winning combination's 
  //     array by returning that value.

  // c) If there is no winner, check to see if there is a tie. Set the `winner` 
  //    variable to `'T'` if there are no more nulls in the board array by 
  //    returning the string `'T'`.

  // d) If there is no winner and there isn???t a tie, return `null`.

// Step 8 - Create Reset functionality

  // a) Add a reset button to the HTML document.

  // b) Store the new reset button element in a constant named `resetBtnEl`.

  // c) Attach an event listener to the `resetBtnEl`. On the `'click'` event it 
  //    should call the `init` function you created in 3.
  }