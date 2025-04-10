// Show the first mission when the page loads
document.getElementById('start-button').addEventListener('click', function() {
  document.querySelector('header').style.display = 'none';
  document.getElementById('mission-screen').style.display = 'block';
});

// Start the mission when the user clicks the 'Start Mission' button
document.getElementById('start-mission').addEventListener('click', function() {
  document.getElementById('mission-screen').style.display = 'none';
  document.getElementById('code-crack').style.display = 'block';
});

// This Is The Code cracking challenge
const correctCode = "12345"; // The correct solution
document.getElementById('check-code').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;

  if (userInput === correctCode) {
    document.getElementById('feedback').textContent = 'Success! You cracked the code!';
    document.getElementById('feedback').style.color = '#00ff99'; // Success color
    setTimeout(function() {
      // After a short delay, show the reward screen
      document.getElementById('code-crack').style.display = 'none';
      document.getElementById('reward-screen').style.display = 'block';
      document.getElementById('reward').textContent = '🎉 You unlocked the Digital Treasure! 🎉';
    }, 1000);
  } else {
    document.getElementById('feedback').textContent = 'Incorrect! Try again!';
  }
});
