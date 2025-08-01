const tasks = [
  {
    title: "Task 1: Chase the Dragon",
    description: "You run in circles. The dragon is on holiday.",
    minigame: () => alert("You try to click the dragon... but it's invisible! 🐉 You fail miserably.")
  },
  {
    title: "Task 2: Retrieve from the Lake",
    description: "The lake has been drained. You find a fishbone.",
    minigame: () => alert("You dive into the dry lake... and get dirt in your socks. 🧦")
  },
  {
    title: "Task 3: Enter the Maze",
    description: "It's just an empty parking lot. You get lost anyway.",
    minigame: () => alert("You walk straight... and somehow end up where you started. 🌀")
  }
];

function enterGoblet() {
  const name = document.getElementById("nameInput").value;
  const announcement = document.getElementById("announcement");
  const options = document.getElementById("task-options");

  if (!name) {
    announcement.textContent = "The Goblet refuses blank names!";
    return;
  }

  announcement.textContent = `🔥 The Goblet has chosen... ${name.toUpperCase()}! Who do you think you are, the Chosen One? 😂`;
  options.style.display = 'block';
}

function startTournament() {
  const taskContainer = document.getElementById("task-container");
  const strategy = document.getElementById("strategy").value;
  const wand = document.getElementById("wand").value;

  taskContainer.innerHTML = `<h2>Your chosen strategy: ${strategy}</h2>`;
  taskContainer.innerHTML += `<h3>Your wand: ${wand}</h3>`;

  tasks.forEach((task, index) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.className = "task";
      div.innerHTML = `
        <h2>${task.title}</h2>
        <p>${task.description}</p>
        <button onclick='(${task.minigame.toString()})()'>Try Task</button>`;
      taskContainer.appendChild(div);

      if (index === tasks.length - 1) {
        const trophy = document.createElement("div");
        trophy.className = "task";
        trophy.innerHTML = `🏆 <strong>Congratulations, Champion!</strong><br/>You have won... the honor of wasting your time.`;
        taskContainer.appendChild(trophy);
      }
    }, (index + 1) * 2000);
  });
}
