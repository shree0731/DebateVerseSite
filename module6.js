// module6.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("quiz-form");
  const result = document.getElementById("result");
  const completeBtn = document.getElementById("completeBtn");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const answers = {
      q1: "b",
      q2: "a",
      q3: "c",
      q4: "b",
      q5: "a"
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

    localStorage.setItem("module6Score", percentage);
    completeBtn.style.display = "inline-block";
  });

  completeBtn.addEventListener("click", () => {
    const completed = JSON.parse(localStorage.getItem("completedModules")) || [];
    if (!completed.includes("module6")) {
      completed.push("module6");
      localStorage.setItem("completedModules", JSON.stringify(completed));

      let points = parseInt(localStorage.getItem("starPoints") || 0);
      points += 10;
      localStorage.setItem("starPoints", points);
      alert("🎉 Module 6 Completed! 10 Star Points Earned.");
    } else {
      alert("✅ You’ve already completed this module.");
    }
  });
});
