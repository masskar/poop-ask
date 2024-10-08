function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("init").innerText = "YUUHUUUU POOPPPP 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "HAPPY JAHRESTAG POOP! Freu mich schon auf morgen und wünsche mir unendlich viele Jahre mit dir! ❤️";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YUUHUUUU POOPPPP 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "Leider hast du keine andere Wahl außer mit mir auszugehen. Dennoch wünsche ich dir sowie uns beiden einen Happy Jahrestag! Freu mich darauf dich morgen zu nerven, hehe! ❤️";
    showConfetti()

}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 500000);
  }
  
