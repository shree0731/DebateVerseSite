// module7.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const result = document.getElementById("result");
  const completeBtn = document.getElementById("completeBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answers = {
      q1: "a",
      q2: "c",
      q3: "b",
      q4: "a",
      q5: "c"
    };

    let score = 0;
    for (const [key, correctAnswer] of Object.entries(answers)) {
      const userAnswer = form.elements[key].value;
      if (userAnswer === correctAnswer) {
        score++;
      }
    }

    const percentage = (score / 5) * 100;
    result.textContent = `You scored ${score}/5 (${percentage}%)`;

    localStorage.setItem("module7Score", percentage);
    completeBtn.style.display = "inline-block";
  });

  completeBtn.addEventListener("click", () => {
    const completed = JSON.parse(localStorage.getItem("completedModules")) || [];
    if (!completed.includes("module7")) {
      completed.push("module7");
      localStorage.setItem("completedModules", JSON.stringify(completed));

      let points = parseInt(localStorage.getItem("starPoints") || 0);
      points += 10;
      localStorage.setItem("starPoints", points);
      alert("🎉 Module 7 Completed! 10 Star Points Earned.");
    } else {
      alert("✅ You’ve already completed this module.");
    }
  });
});
