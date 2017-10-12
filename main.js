var computerChoice;
function computerChoose() {
    computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = 'rock';
    } else if (computerChoice <= 0.67) {
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
}


console.log('Computer chooses: *' + computerChoice + '*');
function game(choice1, choice2) {
  if (choice1 === choice2) {
    alert('It is a tie');
  }
  if (choice1 === 'rock') {
    if (choice2 === 'paper') {
      alert('paper wins');
    } else {
      alert('rock wins');
    }
  }
  if (choice1 === 'paper') {
    if (choice2 === 'scissors') {
      alert('scissors wins!');
    } else {
      alert('paper wins!');
    }
  } 
  if (choice1 === 'scissors') {
      if (choice2 === 'paper') {
        alert('scissors wins!');
      } else {
        alert('paper wins!');
      }
    }
  }

document.getElementById('rock').addEventListener('click', function() {
   console.log(game('rock', computerChoice));
   computerChoose();
});

document.getElementById('paper').addEventListener('click', function() {
   console.log(game('paper', computerChoice));
   computerChoose();
});

document.getElementById('scissors').addEventListener('click', function() {
   console.log(game('scissors', computerChoice));
   computerChoose();
 });