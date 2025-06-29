const player = {
  name: "Hero",
  hp: 100,
  attack: 10,
};

let enemyLevel = 1;

function createEnemy(level) {
  return {
    name: "Enemy Lv" + level,
    hp: 50 + level * 10,
    attack: 5 + level * 2,
  };
}

let enemy = createEnemy(enemyLevel);

function updateStats() {
  document.getElementById("playerStats").textContent =
    player.name + " - HP: " + player.hp;
  document.getElementById("enemyStats").textContent =
    enemy.name + " - HP: " + enemy.hp;
}

function log(message) {
  const logDiv = document.getElementById("log");
  logDiv.innerHTML = message + "<br>" + logDiv.innerHTML;
}

document.getElementById("attackBtn").addEventListener("click", () => {
  if (player.hp <= 0) {
    log("You're defeated! Refresh the page to try again.");
    return;
  }

  enemy.hp -= player.attack;
  log(You hit ${enemy.name} for ${player.attack} damage.);

  if (enemy.hp <= 0) {
    log(${enemy.name} is defeated!);
    enemyLevel++;
    enemy = createEnemy(enemyLevel);
    log(A new ${enemy.name} appears!);
  } else {
    player.hp -= enemy.attack;
    log(${enemy.name} hits you for ${enemy.attack} damage.);
  }

  if (player.hp <= 0) {
    log("You have been defeated.");
    document.getElementById("attackBtn").disabled = true;
  }

  updateStats();
});

updateStats();
