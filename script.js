let playerScore = 0
let computerScore = 0
let roundResult = ""

const options = {
  ROCK: "ROCK",
  PAPER: "PAPER",
  SCISSORS: "SCISSORS"
}

const results = {
  WIN: "WIN!",
  LOSE: "LOSE!",
  TIE: "TIE!"
}

const optionsKeys = Object.keys(options)

const PlayRound = (playerSelection, computerSelection) => {
  switch(playerSelection) {
      case options.ROCK: 
          if(computerSelection === options.SCISSORS) return results.WIN
          else if(computerSelection === options.PAPER) return results.LOSE
          else return results.TIE
      case options.PAPER:
          if(computerSelection === options.ROCK) return results.WIN
          else if(computerSelection === options.SCISSORS) return results.LOSE
          else return results.TIE
      case options.SCISSORS:
          if(computerSelection === options.PAPER) return results.WIN
          else if(computerSelection === options.ROCK) return results.LOSE
          else return results.TIE
  }
}

const GetComputerSelection = () => {
  return options[optionsKeys[Math.floor(Math.random() * optionsKeys.length)]]
}

const rockButton = document.getElementById("rock-selection")
const paperButton = document.getElementById("paper-selection")
const scissorsButton = document.getElementById("scissors-selection")
const scoreInfo = document.getElementById("score-info")
const playerSign = document.getElementById("player-sign")
const playerScoreParameter = document.getElementById("player-score")
const computerSign = document.getElementById("computer-sign")
const computerScoreParameter = document.getElementById("computer-score")
const playAgain = document.getElementById("play-again")
const playAgainButton = document.getElementById("play-again-button")

rockButton.addEventListener("click", () => HandleClick(options.ROCK))
paperButton.addEventListener("click", () => HandleClick(options.PAPER))
scissorsButton.addEventListener("click", () => HandleClick(options.SCISSORS))
playAgainButton.addEventListener("click", () => PlayAgain() )

const HandleClick = (playerSelection) => {
  if (GetGameStatus()) {
    playAgain.style.display = "flex"
    return
  }
  const computerSelection = GetComputerSelection()
  roundResult = PlayRound(playerSelection, computerSelection)
  CalculateScore()
  UpdateResult(playerSelection, computerSelection)
  UpdateScore()
  if (GetGameStatus()) {
    playAgain.style.display = "flex"
    DisplayEndGameMessage()
  }
}

const UpdateResult = (playerSelection, computerSelection) => {
  switch (playerSelection) {
    case "ROCK":
      playerSign.textContent = "✊"
      break
    case "PAPER":
      playerSign.textContent = "✋"
      break
    case "SCISSORS":
      playerSign.textContent = "✌"
      break
  }

  switch (computerSelection) {
    case "ROCK":
      computerSign.textContent = "✊"
      break
    case "PAPER":
      computerSign.textContent = "✋"
      break
    case "SCISSORS":
      computerSign.textContent = "✌"
      break
  }
}

const UpdateScore = () => {
  scoreInfo.textContent = `${roundResult}`
  playerScoreParameter.textContent = `Player: ${playerScore}`
  computerScoreParameter.textContent = `Computer: ${computerScore}`
}

const CalculateScore = () => {
  if (roundResult === "WIN!") playerScore++
  else if (roundResult === "LOSE!") computerScore++
}

const GetGameStatus = () => {
  return playerScore === 3 || computerScore === 3
}

const DisplayEndGameMessage = () => {
  scoreInfo.textContent = playerScore === 3 ? results.WIN: results.LOSE
}

const PlayAgain = () => {
  playerScore = 0
  computerScore = 0
  scoreInfo.textContent = "Who gets 3 rounds wins!"
  playerScoreParameter.textContent = "Player: 0"
  computerScoreParameter.textContent = "Computer: 0"
  playerSign.textContent = "🙂"
  computerSign.textContent = "💻"
  playAgain.style.display = "none"
}